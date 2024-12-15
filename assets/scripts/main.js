const toggleButton = document.getElementById('toggleTheme');

function changeTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');

  currentTheme === 'dark' ? body.setAttribute('data-theme', 'light') : body.setAttribute('data-theme', 'dark')

  toggleButton.classList.toggle('bi-sun');
  toggleButton.classList.toggle('bi-moon-stars');
}

toggleButton.addEventListener('click', changeTheme);