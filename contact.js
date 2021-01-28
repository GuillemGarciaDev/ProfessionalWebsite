
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