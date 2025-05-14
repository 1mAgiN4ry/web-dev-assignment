import { confirmation } from './form_confirmation.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    // Contact
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email-address");
    // Location
    const address = document.getElementById("address-line-1");
    const city = document.getElementById("city");
    const postcode = document.getElementById("postcode");
    // Billing
    const sortCode = document.getElementById("sort-code");
    const accountNumber = document.getElementById("account-number");
    const cvv = document.getElementById("cvv2");

    // RegEx
    const emailRegex = /^\w+@\w+\.\w+$/;
    const sortCodeRegex = /^\d{2}-\d{2}-\d{2}$/;
    const accountNumberRegex = /^\d{8}$/;
    const cvvRegex = /^\d{3,4}$/;

    // Fields
    const fields = [firstName, lastName, email, address, city, postcode, sortCode, accountNumber, cvv];
    const fieldNames = [
        "First name",
        "Last name",
        "Email",
        "Address line 1",
        "City",
        "Postcode",
        "Sort code",
        "Account number",
        "CVV"
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

        if (!sortCodeRegex.test(sortCode.value)) {
            alert("Invalid sort code. Use format: 00-00-00");
            return;
        }

        if (!accountNumberRegex.test(accountNumber.value)) {
            alert("Invalid account number. Must be 8 digits.");
            return;
        }

        if (!cvvRegex.test(cvv.value)) {
            alert("Invalid CVV. Must be 3 or 4 digits.");
            return;
        }

        confirmation(form);
    });
});