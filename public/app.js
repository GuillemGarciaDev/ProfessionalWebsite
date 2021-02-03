// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCvsIT8dDXVxsgXmVM6ea36dvhrThi_TYA",
    authDomain: "professional-website-76e7f.firebaseapp.com",
    databaseURL: "https://professional-website-76e7f-default-rtdb.firebaseio.com",
    projectId: "professional-website-76e7f",
    storageBucket: "professional-website-76e7f.appspot.com",
    messagingSenderId: "496513212190",
    appId: "1:496513212190:web:a7c912bb84971467cbf30f",
    measurementId: "G-7YXQGD7MRE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Reference messages collection

var messageRef = firebase.database().ref('messages');
// Formulario
var form = document.querySelector('form');

document.querySelector('form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getValue('name');
    var email = getValue('email');
    var message = getValue('message');

    console.log(name);
    console.log(email);
    console.log(message);

    // Save message
    try {
        saveMessage(name, email, message);
        alert('Message has been sent succesfully');
    } catch(err) {
        console.error();
    }
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.querySelector('textarea').value = '';
}

function getValue(id) {
    return document.getElementById(id).value;
}

// Save the message to firebase
function saveMessage(name, email, message) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}


// ScrollAnimation
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
sr.reveal('.last-button', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px',
    viewFactor: 0.4
});
