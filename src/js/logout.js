// Function to handle logout
function handleLogout() {
    // Clear any stored user data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Redirect to login page
    window.location.href = '/profile/login/';
}

// Add event listeners to logout buttons
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');
    const logoutButtonMobile = document.getElementById('logoutButtonMobile');
    const logoutButtonTop = document.getElementById('logoutButtonTop');
    
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
    
    if (logoutButtonMobile) {
        logoutButtonMobile.addEventListener('click', handleLogout);
    }

    if (logoutButtonTop) {
        logoutButtonTop.addEventListener('click', handleLogout);
    }
}); 