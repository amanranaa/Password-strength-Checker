const passwordInput = document.getElementById('passwordInput');
const toggleShow = document.getElementById('toggleShow');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

toggleShow.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleShow.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    toggleShow.textContent = 'Show';
  }
});

passwordInput.addEventListener('input', () => {
  const val = passwordInput.value;
  let score = 0;
  if (val.length >= 8) score += 1;
  if (/[A-Z]/.test(val)) score += 1;
  if (/[a-z]/.test(val)) score += 1;
  if (/[0-9]/.test(val)) score += 1;
  if (/[^A-Za-z0-9]/.test(val)) score += 1;

  // Map score to width & colour & text
  const percent = (score / 5) * 100;
  strengthBar.style.width = percent + '%';

  if (score <= 2) {
    strengthBar.style.background = 'red';
    strengthText.textContent = 'Weak Password';
  } else if (score === 3 || score === 4) {
    strengthBar.style.background = 'orange';
    strengthText.textContent = 'Medium Password';
  } else if (score === 5) {
    strengthBar.style.background = 'limegreen';
    strengthText.textContent = 'Strong Password';
  } else {
    strengthBar.style.background = 'transparent';
    strengthText.textContent = 'Enter a password';
  }
});
