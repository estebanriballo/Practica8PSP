document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    // Ocultar todas las secciones menos la de inicio
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById("inicio").style.display = "block";

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = enlace.getAttribute("href").substring(1);

            sections.forEach(section => {
                section.style.display = "none";
            });
            document.getElementById(targetId).style.display = "block";
        });
    });

    const showImagesButton = document.getElementById("showImages");
    const hideImagesButton = document.getElementById("hideImages");
    const imageContainer = document.getElementById("imageContainer");

    showImagesButton.addEventListener("click", () => {
        imageContainer.style.display = "block";
    });

    hideImagesButton.addEventListener("click", () => {
        imageContainer.style.display = "none";
    });
});