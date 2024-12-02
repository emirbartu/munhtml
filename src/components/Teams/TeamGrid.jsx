import { SimpleGrid, Box } from '@chakra-ui/react';
import { TeamMember } from './TeamMember';
import { useState, useEffect } from 'react';

// Import all images dynamically
const akademiImages = import.meta.glob('/src/assets/akademi/*.{jpg,JPG}', {
  eager: true,
  as: 'url'
});

const orgaImages = import.meta.glob('/src/assets/orga/*.{jpg,JPG}', {
  eager: true,
  as: 'url'
});

const formatName = (str) => {
  return decodeURIComponent(str)
    .replace(/\$/g, ' ')
    .split('_')
    .map(part => part.trim())
    .map(part => part
      .split(' ')
      .join(' ')
    )
    .join(' ');
};

const parseTeamData = (images) => {
  return Object.entries(images).map(([path, imageUrl]) => {
    // Extract filename without extension and handle URL encoding
    const fileName = decodeURIComponent(
      path.split('/').pop().replace(/\.(jpg|JPG)$/, '')
    ).replace(/%20/g, ' ');

    // Special handling for names with "&"
    if (fileName.includes('&')) {
      const parts = fileName.split('_');
      const role = parts[0];
      const names = parts.slice(1).join(' ');
      return {
        name: formatName(names),
        role: formatName(role),
        image: decodeURIComponent(imageUrl)
      };
    }

    // Split by underscore if exists
    const parts = fileName.split('_');
    if (parts.length > 1) {
      const [role, ...nameParts] = parts;
      return {
        name: formatName(nameParts.join(' ')),
        role: formatName(role),
        image: decodeURIComponent(imageUrl)
      };
    } else {
      // For files without underscore, use the whole name as role
      return {
        name: '',
        role: formatName(fileName),
        image: decodeURIComponent(imageUrl)
      };
    }
  }).sort((a, b) => {
    // Priority roles that should appear first
    const priorityRoles = ['Secretary General', 'Deputy Secretary General', 'Under Secretary General', 'Director General'];

    // Check if either role is a priority role
    const aIsPriority = priorityRoles.some(role => a.role.toLowerCase().includes(role.toLowerCase()));
    const bIsPriority = priorityRoles.some(role => b.role.toLowerCase().includes(role.toLowerCase()));

    // Sort priority roles first
    if (aIsPriority && !bIsPriority) return -1;
    if (!aIsPriority && bIsPriority) return 1;
    if (aIsPriority && bIsPriority) {
      // If both are priority, sort by the order in priorityRoles array
      const aIndex = priorityRoles.findIndex(role => a.role.toLowerCase().includes(role.toLowerCase()));
      const bIndex = priorityRoles.findIndex(role => b.role.toLowerCase().includes(role.toLowerCase()));
      if (aIndex !== bIndex) return aIndex - bIndex;
    }

    // For non-priority roles or same priority level, sort alphabetically
    return (a.role + a.name).localeCompare(b.role + b.name);
  });
};

export const TeamGrid = ({ activeTeam = 'academy' }) => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const images = activeTeam === 'academy' ? akademiImages : orgaImages;
    const members = parseTeamData(images);
    setTeamMembers(members);
  }, [activeTeam]);

  return (
    <Box w="full" px={4}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        w="full"
        justifyItems="center"
        alignItems="start"
      >
        {teamMembers.map((member, index) => {
          const isPriorityRole = member.role.toLowerCase().includes('secretary') ||
                               member.role.toLowerCase().includes('director');

          return (
            <TeamMember
              key={`${member.role}-${member.name}-${index}`}
              name={member.name || member.role}
              role={member.name ? member.role : ''}
              image={member.image}
              link={member.name === "Hakkı Yılmaz Yılmazer" ? "https://youtu.be/KALvrIuZ3yM" : undefined}
              isPriority={isPriorityRole}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
