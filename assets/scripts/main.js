const toggleButton = document.getElementById('toggleTheme');
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');

  currentTheme === 'dark' ? body.setAttribute('data-theme', 'light') : body.setAttribute('data-theme', 'dark')

  toggleButton.classList.toggle('bi-sun');
  toggleButton.classList.toggle('bi-moon-stars');
}

toggleButton.addEventListener('click', changeTheme);

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("accordion--active");

    accordionActive ? accordionItem.classList.remove("accordion--active") : accordionItem.classList.add("accordion--active");
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("accordion--active"));
    item.classList.add("accordion--active");
  })
})