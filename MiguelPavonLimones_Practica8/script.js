document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    let isDarkMode = false;
    
    button.addEventListener("click", function () {
        if (isDarkMode) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
        isDarkMode = !isDarkMode;
    });
});
