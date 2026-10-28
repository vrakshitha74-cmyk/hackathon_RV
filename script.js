const modal = document.getElementById("registration-modal");
const openButtons = document.querySelectorAll(".open-modal");
const closeButton = document.querySelector(".modal-close");
const form = document.getElementById("registration-form");
const successMessage = document.getElementById("form-success");

function openRegistration() {
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector("input").focus();
}

function closeRegistration() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

openButtons.forEach((button) => button.addEventListener("click", openRegistration));
closeButton.addEventListener("click", closeRegistration);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeRegistration();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeRegistration();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.hidden = true;
  successMessage.hidden = false;
});
