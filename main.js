const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const btnPopup = document.querySelector(".btnLogin-Popup");
const closeIcon = document.querySelector(".close-icon");

registerLink.onclick = () => {
    wrapper.classList.add("active");
}
loginLink.onclick = () => {
    wrapper.classList.remove("active");
}
btnPopup.onclick = () => {
    wrapper.classList.add("active-popup");
}
closeIcon.onclick = () => {
    wrapper.classList.remove("active-popup");
    wrapper.classList.remove("active");
}