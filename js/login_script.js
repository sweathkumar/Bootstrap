function validateForm() {
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
  
    if (emailInput.value === '' || passwordInput.value === '') {
      alert('Please enter your email and password.');
      return false;
    }
  
    return true;
  }
  
  document.querySelector('button[type="submit"]').addEventListener('click', validateForm);