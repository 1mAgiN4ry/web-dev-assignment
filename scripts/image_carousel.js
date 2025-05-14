document.addEventListener("DOMContentLoaded", () => {
    const images = document.getElementById("images").children;
    const backward = document.getElementById("back");
    const forward = document.getElementById("forward");

    let index = 0;

    function applyDisplay() {
        for(let i = 0; i < images.length; i++) {
            if (i === index) {
                images[i].style.display = "inline-block";
            } else {
                images[i].style.display = "none";
            }
        }
    }

    applyDisplay();

    backward.addEventListener("click", function () {
        if (index > 0) {
            index--;
            applyDisplay();
        }
    });

    forward.addEventListener("click", function () {
        if (index < images.length - 1) {
            index++;
            applyDisplay();
        }
    });
});