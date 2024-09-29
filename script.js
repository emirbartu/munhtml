document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('show');
    });

    // Team toggle functionality
    const teamToggleButtons = document.querySelectorAll('.team-toggle button');
    const teamGrids = document.querySelectorAll('.team-grid');

    teamToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const team = this.getAttribute('data-team');

            // Update button styles
            teamToggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show/hide team grids
            teamGrids.forEach(grid => {
                if (grid.classList.contains(team)) {
                    grid.style.display = 'grid';
                } else {
                    grid.style.display = 'none';
                }
            });

            // Update team section title
            const teamTitle = document.querySelector('#our-team h2');
            teamTitle.textContent = team.charAt(0).toUpperCase() + team.slice(1) + ' Team';
        });
    });

    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            this.querySelector('.dropdown-content').classList.toggle('show');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('.dropdown-content').classList.remove('show');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('show');
        });
    });
});

// Function to create committee pages dynamically
function createCommitteePage(committee) {
    const content = `
        <h1>${committee.toUpperCase()}</h1>
        <p>This is the ${committee.toUpperCase()} committee page.</p>
        <a href="index.html">Back to Home</a>
    `;
    document.body.innerHTML = content;
}

// Check if we're on a committee page
const urlParams = new URLSearchParams(window.location.search);
const committee = urlParams.get('committee');
if (committee) {
    createCommitteePage(committee);
}
