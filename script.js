
// Toggle Icon navebar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// light Mode 
let lightModeIcon = document.querySelector('#lightMode-icon');
console.log(lightModeIcon);

lightModeIcon.classList.toggle('bx-sun');

lightModeIcon.onclick = () => {
    lightModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('light-mode');
};


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')                
            })
        }

    })

    // making navbar sticky
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)

    // Remove toggle Icon and Navbar on click of navbar links 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const scrollRevealOption = {
    // reset: true,
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    delay: 200
};

ScrollReveal().reveal('.home-content', {
    ...scrollRevealOption,
    delay: 100,
    origin: "top",
});

ScrollReveal().reveal('.heading', {
    ...scrollRevealOption,
    reset: true,
    delay: 100,
    origin: "top",
});

ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", {
    ...scrollRevealOption,
    delay: 500,
    origin: "bottom", 
});

ScrollReveal().reveal(".home-content h1, .about-img", {
    ...scrollRevealOption,
    delay: 500,
    origin: "left", 
});

ScrollReveal().reveal(".home-content p, .about-content", {
    ...scrollRevealOption,
    delay: 500,
    origin: "right", 
});


// Typed JS 
const typed = new Typed('.multiple-text', {
    strings: ["Java Developer", "Data Engineer", "Back-end Developer", "Sql Developer","MERN Stack Developer","MEAN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});
