import { Box, Text, VStack, useColorModeValue, Container, SimpleGrid } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const defaultCenter = {
  lat: 40.7128,  // Default to New York coordinates
  lng: -74.0060,
};

export const Map = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Container maxW="container.xl" py={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Box
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          borderWidth="1px"
          borderColor={borderColor}
          bg={bgColor}
          h="400px"
          position="relative"
        >
          <MapContainer
            center={[defaultCenter.lat, defaultCenter.lng]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[defaultCenter.lat, defaultCenter.lng]}>
              <Popup>
                MUN Conference Venue<br />
                123 MUN Street, Conference Center
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
