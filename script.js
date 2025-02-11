document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    button.textContent = "Modo Oscuro";
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.padding = "10px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.background = "#333";
    button.style.color = "white";
    button.style.cursor = "pointer";
    
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.querySelectorAll("main, aside, header, footer, div").forEach(element => {
            element.classList.toggle("dark-mode");
        });
    });
});