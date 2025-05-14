export function confirmation(form) {
    const screen = document.getElementById("confirmation-screen");
    const text = document.getElementById("pop-up-text");
    const confirm = document.getElementById("confirm");
    const cancel = document.getElementById("cancel");

    let listenersAttached = false;
    
    screen.style.display = "flex";
    text.style.display = "inline-block";
    confirm.style.display = "inline-block";
    cancel.style.display = "inline-block";

    if (!listenersAttached) {
        confirm.addEventListener("click", function () {
            form.submit();
        });

        cancel.addEventListener("click", function () {
            screen.style.display = "none";
            text.style.display = "none";
            confirm.style.display = "none";
            cancel.style.display = "none";
        });

        listenersAttached = true;
    }
}