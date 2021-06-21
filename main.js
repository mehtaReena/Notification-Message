
const notificationBtn = document.getElementById("message");
const alertBtn = document.getElementById("alert");
const container = document.getElementById("container");

// notificationBtn.addEventListener('click', show());
// alertBtn.addEventListener('click', showAlert());

function show(){



    let message = document.createElement("div");
    message.classList.add('message')
    message.innerText="message";
    container.appendChild(message);
    // setTimeout(function () {document.getElementById('message').style.display='none'},10);

}



function showAlert(){

    let message = document.createElement("div");
    message.classList.add('alert')
    message.innerText="message";

    container.appendChild(message);

}



