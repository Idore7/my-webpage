// toggle icon navbar
let menuIcon = document.querySelector (`#menu-icon`);
let navbar = document.querySelector (`.nav-bar`);

menuIcon.addEventListener(`click`, () => {
  menuIcon.classList.toggle(`bx-x`);
  navbar.classList.toggle(`active`)
})


// scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });

  let headToggle = document.getElementById("header");
  headToggle.classList.toggle('scrolled', window.scrollY > 100);
});

// remove toggle icon and navbar when click navbar links
menuIcon.classList.remove(`bx-x`);
navbar.classList.remove(`active`)