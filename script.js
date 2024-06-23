// This script handles click events on menu items

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const target = event.target.getAttribute('href');
            // Logic to handle navigation based on target (e.g., show corresponding content)
            console.log(`Navigating to ${target}`);
            // Example: window.location.href = target; // Navigate to the clicked link
        });
    });
});
