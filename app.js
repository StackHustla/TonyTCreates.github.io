let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigh = sec.offsetHeight;
        let id = sec.getAttribute;

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.querySelector('.arrow-left').addEventListener('click', function () {
    document.querySelector('.slider').scrollBy({
        left: -100, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
});

document.querySelector('.arrow-right').addEventListener('click', function () {
    document.querySelector('.slider').scrollBy({
        left: 100, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
});