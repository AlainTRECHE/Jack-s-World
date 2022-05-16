const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const submit = document.querySelector(".submit");
const signup = document.querySelector(".signup");
const pumpkinsLinks = document.querySelector(".pumpkins-links");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function toggleModa2() {
    modal2.classList.toggle("show-moda2");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal, toggleModa2);
closeButton.addEventListener("click", toggleModal, toggleModa2);
window.addEventListener("click", windowOnClick);
submit.addEventListener("click",toggleModal, toggleModa2);
pumpkinsLinks.addEventListener("clik",toggleModal, toggleModa2);