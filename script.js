// To toggle the navigation menu visibility on hamburger when clicked
const hamburgerMenu = document.getElementById('hamburger-menu');
// const loginButton = document.querySelector('.login-button');
// const registerButton = document.querySelector('.register-button');
const navMenu = document.querySelector('nav ul');
const btnMenu = document.querySelector('.btn');
const dropdownItems = document.querySelectorAll('.dropdown');
const dropdownContents = document.querySelectorAll('.dropdown-content');
let menuOpen = false;

// To toggle the visibility of the main menu on mobile
hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    btnMenu.classList.toggle('hidden'); // Hide .btn menu when mobile menu is active

    if (!menuOpen) {
    hamburgerMenu.innerHTML = '<img src="images/icon-close-menu.svg" alt="Close">';
    menuOpen = true;
    } else {
    hamburgerMenu.innerHTML = '<img src="images/icon-menu.svg" alt="Menu">';
    menuOpen = false;
    }
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