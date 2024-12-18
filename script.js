// To toggle the navigation menu visibility on hamburger when clicked
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.querySelector('nav ul', '.btn');
const dropdownItems = document.querySelectorAll('.dropdown');
const dropdownContents = document.querySelectorAll('.dropdown-content');

// To toggle the visibility of the main menu on mobile
hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// This is to toggle the visibility of each dropdown on mobile
dropdownItems.forEach((dropdown) => {
  dropdown.addEventListener('click', () => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('active');
  });
});

// To close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    dropdownContents.forEach((dropdownContent) => {
      dropdownContent.classList.remove('active');
    });
  }
});