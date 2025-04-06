// Function to handle logout
function handleLogout() {
    // Clear any stored user data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Redirect to login page
    window.location.href = '/profile/login/';
}

// Add event listeners to logout buttons when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add logout button to navigation if it doesn't exist
    const nav = document.querySelector('.navbar.bg-dark');
    if (nav && !document.getElementById('logoutButtonTop')) {
        const logoutBtn = document.createElement('button');
        logoutBtn.id = 'logoutButtonTop';
        logoutBtn.className = 'btn btn-danger ms-3';
        logoutBtn.innerHTML = '<i class="fa-solid fa-right-from-bracket me-2"></i> Logout';
        nav.appendChild(logoutBtn);
    }

    // Add mobile logout button if it doesn't exist
    const mobileMenu = document.querySelector('.list-group-horizontal');
    if (mobileMenu && !document.getElementById('logoutButtonMobile')) {
        const logoutBtnMobile = document.createElement('button');
        logoutBtnMobile.id = 'logoutButtonMobile';
        logoutBtnMobile.className = 'list-group-item list-group-item-action text-center flex-fill bg-danger text-white';
        logoutBtnMobile.innerHTML = '<p class="sr-only">Logout</p><i class="fa-solid fa-right-from-bracket"></i>';
        mobileMenu.appendChild(logoutBtnMobile);
    }

    // Add event listeners to all logout buttons
    const logoutButtons = document.querySelectorAll('[id^="logoutButton"]');
    logoutButtons.forEach(button => {
        button.addEventListener('click', handleLogout);
    });
}); 