document.addEventListener("DOMContentLoaded", () => {
    const price = document.getElementById("price");
    const quantityDecrement = document.getElementById("quantity-decrement");
    const quantityIncrement = document.getElementById("quantity-increment");
    const quantity = document.getElementById("quantity");
    const blackOption = document.getElementById("black-ver");
    const whiteOption = document.getElementById("white-ver");

    

    quantityDecrement.addEventListener("click", function () {
        if (quantity.value > 1) {
            quantity.valueAsNumber -= 1;
            let value = parseFloat(price.textContent);
            price.textContent = Math.trunc(((value / (quantity.valueAsNumber + 1)) * quantity.valueAsNumber) * 100) / 100;
        }
    });

    quantityIncrement.addEventListener("click", function () {
        quantity.valueAsNumber += 1;
        let value = parseFloat(price.textContent);
        price.textContent = Math.trunc(((value / (quantity.valueAsNumber - 1)) * quantity.valueAsNumber) * 100) / 100;
    });

    blackOption.addEventListener("click", function () {
        if (whiteOption.classList.contains("alt-btn")) {
            whiteOption.classList.remove("alt-btn");
            blackOption.classList.add("alt-btn");
            let value = price.textContent;
            price.textContent = Math.trunc((parseFloat(value) - (50 * quantity.valueAsNumber)) * 100) / 100;
        }
    });

    whiteOption.addEventListener("click", function () {
        if (blackOption.classList.contains("alt-btn")) {
            blackOption.classList.remove("alt-btn");
            whiteOption.classList.add("alt-btn");
            let value = price.textContent;
            price.textContent = Math.trunc((parseFloat(value) + (50 * quantity.valueAsNumber)) * 100) / 100;
        }
    });
});