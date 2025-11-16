// var form = document.createElement('form')
// var nameLabel = document.createElement('label');
// nameLabel.textContent = 'Enter your name: ';

// var emailLabel = document.createElement('label');
// emailLabel.textContent = 'Enter your email: ';

// form.appendChild(nameLabel);
// var input1 = document.createElement('input');
// form.appendChild(input1);

// form.appendChild(emailLabel);
// var input2 = document.createElement('input');
// form.appendChild(input2);

// var button = document.createElement('button');
// button.innerHTML = 'Send Your Data';



// form.appendChild(button);

// document.body.appendChild(form);


let p1 = document.getElementById('ptext');

p1.textContent = "Using textContent. ";


p1.innerText += "Using innerText. ";


p1.innerHTML += "<b>Using innerHTML. </b>";


let txtNode = document.createTextNode("Using createTextNode.");
p1.appendChild(txtNode);


let p2 = document.getElementById('pelement');


let s1 = document.createElement('span');
s1.textContent = "[appendChild] ";
p2.appendChild(s1);

let s2 = document.createElement('span');
s2.textContent = "[append] ";
p2.append(s2);

let s3 = document.createElement('span');
s3.textContent = "[insertBefore] ";
p2.insertBefore(s3, p2.firstChild);

let s4 = document.createElement('span');
s4.textContent = "[insertAdjacentElement]";
p2.insertAdjacentElement('beforeend', s4);
