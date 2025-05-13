document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.querySelector('.email-subscribe__input');
  const submitBtn = document.querySelector('.email-subscribe__submit');

  function validateEmail(email) {
    // Более строгая регулярка
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  emailInput.addEventListener('input', () => {
    const isValid = validateEmail(emailInput.value);

    if (emailInput.value.trim() === '') {
      emailInput.classList.remove('valid', 'invalid');
      emailInput.style.color = '';
      submitBtn.disabled = true;
      return;
    }

    if (isValid) {
      emailInput.classList.add('valid');
      emailInput.classList.remove('invalid');
      emailInput.style.color = '#000';
      submitBtn.disabled = false;
    } else {
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      emailInput.style.color = '#670A18';
      submitBtn.disabled = true;
    }
  });

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (validateEmail(emailInput.value)) {
      alert('Email успешно отправлен!');
      emailInput.value = '';
      emailInput.classList.remove('valid');
      emailInput.style.color = '';
      submitBtn.disabled = true;
    }
  });
});
