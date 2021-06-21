const messageBtn = document.querySelector(".message-btn");
const alertBtn = document.querySelector(".alert-btn");
const msgBox = document.querySelector(".message");
const alertBox = document.querySelector(".alert");
let timer = null;

alertBtn.addEventListener("click", (e) => {
    msgBox.classList.add("hide");
    alertBox.classList.remove("hide");
    timer = setTimeout(() => {
        alertBox.classList.add("hide");
    }, 2000);
});

messageBtn.addEventListener("click", (e) => {
    alertBox.classList.add("hide");
    msgBox.classList.remove("hide");
    timer = setTimeout(() => {
        msgBox.classList.add("hide");
    }, 1000);
});

msgBox.addEventListener("mouseenter", (e) => {
    clearTimeout(timer);
});

msgBox.addEventListener("mouseout", (e) => {
    timer = setTimeout(() => {
        msgBox.classList.add("hide");
    }, 2000);
});

alertBox.addEventListener("mouseenter", (e) => {
    clearTimeout(timer);
});

alertBox.addEventListener("mouseout", (e) => {
    timer = setTimeout(() => {
        alertBox.classList.add("hide");
    }, 1000);
});