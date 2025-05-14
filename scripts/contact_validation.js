import { confirmation } from './form_confirmation.js';

document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("email-address");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const form = document.getElementById("form");

    const emailRegex = /^\w+@\w+\.\w+$/;

    const fields = [email, subject, message];
    const fieldNames = [
        "Email",
        "Subjetc",
        "Message"
    ];

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const emptyFields = fields
            .map((field, index) => (!field.value.trim() ? fieldNames[index] : null))
            .filter(name => name !== null);

        if (emptyFields.length > 0) {
            alert("Please fill in the following fields:\n\n" + emptyFields.join("\n"));
            return;
        }

        if (!emailRegex.test(email.value)) {
            alert("Invalid email.");
            return;
        }

        confirmation(form);
    });
});