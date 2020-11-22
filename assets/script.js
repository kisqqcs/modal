const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const okayButton = document.querySelector(".okay-button");
const cancelButton = document.querySelector(".cancel-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
okayButton.addEventListener("click", toggleModal);
cancelButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
