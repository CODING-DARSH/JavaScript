var form = document.createElement('form')
var nameLabel = document.createElement('label');
nameLabel.textContent = 'Enter your name: ';

var emailLabel = document.createElement('label');
emailLabel.textContent = 'Enter your email: ';

form.appendChild(nameLabel);
var input1 = document.createElement('input');
form.appendChild(input1);

form.appendChild(emailLabel);
var input2 = document.createElement('input');
form.appendChild(input2);

var button = document.createElement('button');
button.innerHTML = 'Send Your Data';



form.appendChild(button);

document.body.appendChild(form);


