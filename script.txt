document.addEventListener("DOMContentLoaded", () => {
    const iconsContainer = document.getElementById('iconsContainer');
    const iconForm = document.getElementById('iconForm');
    const iconUrl = document.getElementById('iconUrl');
    const iconAlt = document.getElementById('iconAlt');
    const iconLink = document.getElementById('iconLink');
    const toggleFormButton = document.getElementById('toggleForm');
    const adminPanel = document.getElementById('adminPanel');
    const loginPanel = document.getElementById('loginPanel');
    const loginForm = document.getElementById('loginForm');
    const adminPassword = document.getElementById('adminPassword');
    const powerIcon = document.getElementById('powerIcon');

    const ADMIN_PASSWORD = "admin123"; // This should be securely handled in a real app

    function loadIcons() {
        const icons = JSON.parse(localStorage.getItem('icons')) || [];
        iconsContainer.innerHTML = '';
        icons.forEach(icon => {
            const iconDiv = document.createElement('div');
            iconDiv.classList.add('icon');
            iconDiv.innerHTML = `
                <img src="${icon.url}" alt="${icon.alt}">
                <span>${icon.alt}</span>
            `;
            iconDiv.onclick = () => window.location.href = icon.link;
            iconsContainer.appendChild(iconDiv);
        });
    }

    function addIcon(e) {
        e.preventDefault();
        const icons = JSON.parse(localStorage.getItem('icons')) || [];
        icons.push({
            url: iconUrl.value,
            alt: iconAlt.value,
            link: iconLink.value
        });
        localStorage.setItem('icons', JSON.stringify(icons));
        iconUrl.value = '';
        iconAlt.value = '';
        iconLink.value = '';
        loadIcons();
    }

    function toggleForm() {
        if (iconForm.style.display === 'none' || iconForm.style.display === '') {
            iconForm.style.display = 'flex';
        } else {
            iconForm.style.display = 'none';
        }
    }

    function toggleLoginPanel() {
        if (loginPanel.style.display === 'none' || loginPanel.style.display === '') {
            loginPanel.style.display = 'block';
        } else {
            loginPanel.style.display = 'none';
        }
    }

    function handleLogin(e) {
        e.preventDefault();
        if (adminPassword.value === ADMIN_PASSWORD) {
            adminPanel.style.display = 'flex';
            loginPanel.style.display = 'none';
            localStorage.setItem('adminLoggedIn', 'true');
        } else {
            alert('Incorrect password');
        }
    }

    function checkAdminLogin() {
        const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
        if (isLoggedIn) {
            adminPanel.style.display = 'flex';
            loginPanel.style.display = 'none';
        } else {
            loginPanel.style.display = 'none';
        }
    }

    powerIcon.addEventListener('click', toggleLoginPanel);
    iconForm.addEventListener('submit', addIcon);
    toggleFormButton.addEventListener('click', toggleForm);
    loginForm.addEventListener('submit', handleLogin);
    checkAdminLogin();
    loadIcons();
});
