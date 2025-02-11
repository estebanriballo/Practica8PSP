document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.querySelector("#modo-oscuro");
    const urlButton = document.querySelector("#openURL");
    let isDarkMode = false;
    
    darkModeButton.addEventListener("click", function () {
        if (isDarkMode) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.querySelectorAll("li, p, h1, h2, h3").forEach(item => item.style.color = "black");
            darkModeButton.textContent = "🌙 Modo Oscuro";
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            document.querySelectorAll("li, p, h1, h2, h3").forEach(item => item.style.color = "white");
            darkModeButton.textContent = "☀️ Modo Claro";
        }
        isDarkMode = !isDarkMode;
    });

    urlButton.addEventListener("click", function () {
        window.location.href = "https://www.youtube.com/watch?v=pFyAu4R684s";
    });
});
