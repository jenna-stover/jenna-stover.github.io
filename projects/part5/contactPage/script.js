const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const sendMessage = async () => {
    const firstNameInput = document.getElementById("first-name").value;
    const lastNameInput = document.getElementById("last-name").value;
    const emailInput = document.getElementById("email").value;
    const messageInput = document.getElementById("message").value;

    const message = document.getElementById("message");
    const showErrorMessage = document.getElementById("error-message").classList.remove("hidden");
    const showSuccessMessage = document.getElementById("success-message").classList.remove("hidden");

    const hideErrorMessage = document.getElementById("error-message").classList.add("hidden");
    const hideSuccessMessage = document.getElementById("success-message").classList.remove("hidden");

    if(firstNameInput && lastNameInput && emailInput && messageInput) {
        const formData = new FormData();
        formData.append("first-name", firstNameInput);
        formData.append("last-name", lastNameInput);
        formData.append("email", emailInput);
        formData.append("message", messageInput);

        try {
            message.innerHTML += showSuccessMessage;
            message.innerHTML += hideErrorMessage;
            document.getElementById("contact-form").reset();
        } catch (error) {
            console.error("Error sending form data:", error);
        }
    }else {
        message.innerHTML += showErrorMessage;
        message.innerHTML += hideSuccessMessage;
    }
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("contact-button").onclick = sendMessage;

};