document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    const urlButton = document.querySelector("#openURL");
    let isDarkMode = false;
    
    button.addEventListener("click", function () {
        if (isDarkMode) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.querySelectorAll("li, p, h1").forEach(item => item.style.color = "black");
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            document.querySelectorAll("li, p, h1").forEach(item => {
                item.style.color = "white";
            });
        }
        isDarkMode = !isDarkMode;
    });

    urlButton.addEventListener("click", function () {
        window.location.href = "https://www.youtube.com/watch?v=pFyAu4R684s";
    });
});
