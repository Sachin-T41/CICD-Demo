const button = document.getElementById("changeBtn");
const message = document.getElementById("message");
const mdg=;

button.addEventListener("click", function () {
    message.textContent = "You clicked the button!";
    message.style.color = "green";
});