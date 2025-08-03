document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            if (users.some(u => u.username === username)) {
                alert('Username already exists');
                return;
            }
            if (users.some(u => u.email === email)) {
                alert('Email already registered');
                return;
            }
            users.push({ fullname, email, username, password });
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify({ username, email }));
            alert('Signup successful!');
            window.location.href = 'services.html';
        });
    }
});