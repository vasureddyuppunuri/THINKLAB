document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    
    // Get stored users from localStorage (simulating a database)
    const getStoredUsers = () => {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    };

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get user input
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            // Get stored users
            const users = getStoredUsers();

            // Check if user exists and credentials match
            const user = users.find(u => 
                (u.username === username || u.email === username) && 
                u.password === password
            );

            if (user) {
                // Store logged in user info (optional)
                localStorage.setItem('currentUser', JSON.stringify({
                    username: user.username,
                    email: user.email
                }));
                
                // Redirect to services page
                window.location.href = 'services.html';
            } else {
                alert('Invalid username/email or password');
            }
        });
    }
});