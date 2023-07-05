const LoginFormHandler = async (event) => {
    event.preventDefault();
    // Get the values of the username and password input fields
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // redirect to the homepage
      if (response.ok) {
        document.location.replace('/'); // load the homepage
      } else {
        alert('Failed to log in.'); 
      }
    }
  };
  
  // Event listener
  const LoginForm = document.querySelector('.login-form');
  if (LoginForm) {
    LoginForm.addEventListener('submit', LoginFormHandler);
  }