const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const trigger = document.querySelector(".trigger");
const trigger2 = document.querySelector(".trigger2");
const closeButton = document.querySelector(".close-button");
const closeButton2 = document.querySelector(".close-button2");
const submit = document.querySelector(".submit");
const signup = document.querySelector(".signup");
const pumpkinsLinks = document.querySelector(".pumpkins-links");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function toggleModal2() {
    modal2.classList.toggle("show-modal2");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
trigger2.addEventListener("click", toggleModal2);
closeButton.addEventListener("click", toggleModal);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick);
submit.addEventListener("click",toggleModal, toggleModal2);
pumpkinsLinks.addEventListener("clik",toggleModal, toggleModal2);

