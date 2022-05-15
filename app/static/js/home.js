const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const submit = document.querySelector(".submit");
const signup = document.querySelector(".signup");
const pumpkinsLinks = document.querySelector(".pumpkins-links")

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
submit.addEventListener("click",toggleModal);
signup.addEventListener("click",toggleModal);
pumpkinsLinks.addEventListener("clik",toggleModal);