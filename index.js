const bttBtn = document.querySelector(".btt-btn");
const nameInput = document.getElementById("uname");
const emailInput = document.getElementById("uemail");
const msgInput = document.getElementById("umsg");
const messageInput = document.getElementById('umsg');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

var tablink = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablinks of tablink){
        tablinks.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// back to top working
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { 
        bttBtn.style.display = "block";
    } else {
        bttBtn.style.display = "none";
    }
});
bttBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});
// back to top working end

// Validate the form
nameInput.addEventListener('input', validateName);
messageInput.addEventListener('input', validateMessage);
nameInput.addEventListener('focusout', validateName);
messageInput.addEventListener('focusout', validateMessage);

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.innerText = "Name is required";
    } else {
        nameError.innerText = "";
    }
}
function validateMessage() {
    if (messageInput.value.trim() === "") {
        messageError.innerText = "Message cannot be empty";
    } else {
        messageError.innerText = "";
    }
}
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    validateName();
    validateEmail();
    validateMessage();

    if (nameError.innerText === "" && messageError.innerText === "") {
        alert("Form submitted successfully!");
    } else {
        alert("Please correct the errors before submitting.");
    }
});

