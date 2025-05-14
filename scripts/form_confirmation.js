export function confirmation(form) {
    const screen = document.getElementById("confirmation-screen");
    const confirm = document.getElementById("confirm");
    const cancel = document.getElementById("cancel");

    let listenersAttached = false;
    
    screen.style.display = "flex";

    if (!listenersAttached) {
        confirm.addEventListener("click", function () {
            form.submit();
        });

        cancel.addEventListener("click", function () {
            screen.style.display = "none";
        });

        listenersAttached = true;
    }
}