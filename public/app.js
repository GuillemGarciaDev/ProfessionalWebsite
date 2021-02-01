
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom',
    distance: '30px'
});
sr.reveal('.title-info', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.ilustr', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px'
});
sr.reveal('.about-me', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('.my-education', {
    duration: 2000,
    origin: 'top',
    distance: '50px',
    viewFactor: 0.4
});
sr.reveal('.card', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
    viewFactor: 0.4
});
sr.reveal('.my-skills', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
    viewFactor: 0.4
});
sr.reveal('.skills-title', {
    duration: 2000,
    origin: 'top',
    distance: '200px',
    viewFactor: 0.4
});
sr.reveal('.icons-row', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
    viewFactor: 0.4
});
sr.reveal('.s1', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px',
    viewFactor: 0.4
});
sr.reveal('.form-box', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px',
    viewFactor: 0.4
});

// NavBar animation function




// Formulario
var form = document.querySelector('form');

document.querySelector('form').addEventListener('submit', getData);

function getData(e) {
    e.preventDefault();
    // console.log('Working');

    var name = getValue('name');
    var email = getValue('email');
    var message = getValue('message');

    console.log(name);
    console.log(email);
    console.log(message);
}

function getValue(id) {
    return document.getElementById(id).value;
}