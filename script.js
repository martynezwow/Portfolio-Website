
  document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-text", {
      strings: [
        "Web Designer",
        "Web Developer",
        "UI / UX Designer",
        "Software Tester"
      ],
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 1800,
      loop: true
    });
    new Typed("#typed-about", {
      strings:[
        "Creative Thinker",
        "Passionate Developer",
        "Problem Solver",
        "Technology Enthusiast"
      ],
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 1800,
      loop: true
    })
  });
     const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x'); // changes menu icon to 'X'
    });
