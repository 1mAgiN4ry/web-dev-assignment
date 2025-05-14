document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("dropdown-btn");
    const menu = document.getElementById("dropdown-menu");

    btn.addEventListener("click", function () {
        if (menu.style.display == "none") {
            menu.style.display = "inline-block";
        } else {
            menu.style.display = "none";
        }
    });
});