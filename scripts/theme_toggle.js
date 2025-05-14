document.addEventListener("DOMContentLoaded", () => {
    function applyTheme() {
        const body = document.body;

        const logoDark = document.getElementById("logo-dark");
        const logoLight = document.getElementById("logo-light");
        const buttonDark = document.getElementById("theme-btn-dark");
        const buttonLight = document.getElementById("theme-btn-light");
        const hamburgerDark = document.getElementById("hamburger-dark");
        const hamburgerLight = document.getElementById("hamburger-light");

        const selectedTheme = localStorage.getItem('theme');

        if (selectedTheme === 'dark') {
            logoDark.style.display = "inline-block";
            buttonDark.style.display = "inline-block";
            hamburgerDark.style.display = "inline-block";

            logoLight.style.display = "none";
            buttonLight.style.display = "none";
            hamburgerLight.style.display = "none";

            body.classList.remove("lightmode");
            body.classList.add("darkmode");
        }

        if (selectedTheme === 'light') {
            logoDark.style.display = "none";
            buttonDark.style.display = "none";
            hamburgerDark.style.display = "none";

            logoLight.style.display = "inline-block";
            buttonLight.style.display = "inline-block";
            hamburgerLight.style.display = "inline-block";

            body.classList.remove("darkmode");
            body.classList.add("lightmode");
        }
    }

    applyTheme();

    document.querySelector(".light-dark-toggle").addEventListener("click", function () {
        const theme = localStorage.getItem('theme');

        if (theme === 'dark') {
            localStorage.setItem('theme', 'light');
        } else if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        applyTheme();
    });
});