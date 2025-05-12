document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('.email-subscribe__input');
    const submitBtn = document.querySelector('.email-subscribe__submit');
  
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    emailInput.addEventListener('input', () => {
      const isValid = validateEmail(emailInput.value);
  
      if (emailInput.value.trim() === '') {
        emailInput.classList.remove('valid', 'invalid');
        submitBtn.disabled = true;
        return;
      }
  
      if (isValid) {
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
        submitBtn.disabled = false;
      } else {
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
        submitBtn.disabled = true;
      }
    });
  });
  