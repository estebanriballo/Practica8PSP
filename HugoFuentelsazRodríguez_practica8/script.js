document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    
    btn1.addEventListener("click", () => {
        if (!document.getElementById("generatedImage")) {
            const image = document.createElement("img");
            image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAb1BMVEUAAAD///84ODgyMjIrKytkZGTExMT09PTBwcAlJST39/dsbGwYGBjw8PB4eHc7OzsLCwqmpqaHh4efn5+BgYHq6uoWFhYgICCOjo7Ozs5TU1NJSUnKyspBQUG4uLgRERGZmZnY2NhcXFyysrLj4+MJkNPxAAAD9ElEQVR4nO3a63aiMBSG4ahoq1ap9dR6qDrt/V/jEHaCERIEWq2s9T5/ZrABzSduwlalAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADArcVdLQ4POHR7Qd2VjIl6kTb07L5avySG6+vHevn9yTXUEYPggHGnxJuM2ZrNcWHvo/xhtL5+rPebzK8J+4qOoQH9snkszCA72X1g5+3lsLJ8H0D2kv4FBlTKRM1ke3m5b2SGTc122zLpdP0DqmWidvLAx8W+3/LgzG63LpNv/4DSTJx5TOSRubPrIJ9Ty+pJJ1RnJZO3XtcjXp/HxeYo5zpr6utklT2yirNdh+mJ9bT1HuuPue/U0TdAMpn6/nTJngT2M9jPbec8p5k8ThAOOUNO+ff4rHImai4HMXU2HnVK95RMfEuaP5e+7mclExj1igOqZ6I+JIVdurGUjVlo8KNnMlAb89kvDqiRiZuD9zrkevxM1Jv7HrvqZLLP6uwxmLHVgkzUZ6DO1skkq7MmYbt+9WlDJipQZ2tlYutsp7y+aq3IZPgkE8nVWclk3h/n9P3H2zmRBOur1opMbJ3N3bOE1rEj//EOy2zEqfSJ25GJWvjqbCiTp8ABe3bAMjDAaEkmts669yy1M8nqrG8B6GhLJuok03FrRe1MAn2DvNZk8moW5E4vUjIZFZRMeffTerLuRfKfeLONqs/lt1xmYuus0zeQTBbqJWflOVjiWS9Jrq3r04Elmcw6k9fkn/f0OIO7p5LLRL3LdM51tu76RJ8/XfP5aro+kUz0Z1CnMgnEfzP5TNRXrs7WXsfuVLg/67iayVYOlTz/V7Un/zWFTGydtZeN+vc7R5WtZxve76SZLMytwez095msTZ01vaAG98Ublesb+FzNZPpn7chiJrm+Qf3+ifQHftI/kXqS3Guc3ko+fTfjycT2DWRutftsJkvbN2jSZ5NMumnbfzm7d4n1ZnKxnq3dj93ntj29O63CtVj1v9Lrzr0Xdt5MbJ3VSTTv29vz5uB94iqZJA7zsmbdbfgzsX2DuPb3O279KO0/Xs3k31i+mkxO2ubTa8SfidM3qPc94MV6/rWszvozWT59Kh3Dtz5X5ZZq8CiZ2L7Bx4++L7Z9A181KmSy0CdUEu14nTxlkkxyLT5tevsv/bXCfYUyyerspkomtp7m+6+hx5Unk5Muz+ZqNYnOr6CzvPcNjzkbPE7yiuwr88r9/qR4Ppg6Oyp+3ycfNme603SBt0+yGn3K8Kle8HzP/TX6hoaa/ydC6W+PojgqYZYO3fR74Nh31Y3SHyHFxbd6nR7gF2cCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+4j/BWyqvBJ1VKQAAAABJRU5ErkJggg=="; 
            image.alt = "Imagen mostrada";
            image.id = "generatedImage";
            image.style.display = "block";
            image.style.margin = "20px auto";
            
            document.body.appendChild(image);
        }
    });
    
    btn2.addEventListener("click", function () {
        if (!document.getElementById("textDiv")) {
            const texto = "Una de las cosas que me gusta mucho es la comunidad. Al final hay muchas personas trabajando con la misma herramienta, que se encuentran los mismos problemas que tú y, o bien permite que se solucionen antes, o bien alguien ya ha encontrado un workaround. Trabajar con ficheros 'jsx' / 'tsx' es muy cómodo. Poder tener el HTML junto con el código Javascript / Typescript hace que el desarrollo sea más rápido. El entorno y la experiencia de desarrollo están muy cuidados, funcionan rápido y no suelen dar problemas. Integra muchas optimizaciones sin que tengas que tener los conocimientos sobre cómo optimizar el bundle, cómo hacer prefetch, optimización de imágenes, etc. Te evita trabajar con ficheros javascript, conectarlos con el HTML, y gestionar el sistema de bundling por tu cuenta, que suele requerir mucho conocimiento y lo más importante, el tiempo. Hay mucha gente probando y reportando errores, por lo que el desarrollo es muy activo y se corrigen tanto errores como se añaden mejoras continuamente.";
            
            const div = document.createElement("div");
            div.textContent = texto;
            div.id = "textDiv"; 
            div.style.background = "#3b82f6";
            div.style.color = "white";
            div.style.padding = "10px";
            div.style.borderRadius = "5px";
            div.style.margin = "20px auto";
            div.style.textAlign = "center";
            div.style.maxWidth = "400px";
    
            document.body.appendChild(div);
        } else {
            alert("Ya has añadido el texto. No se puede añadir otra vez.");
        }
    });
    
    btn3.addEventListener("click", function () {
        document.body.style.backgroundColor = "#f4c7ab"; 
    });
    
    btn4.addEventListener("click", function () {
        const videoUrl = "https://www.youtube.com/watch?v=tVBb79WLScc"; 
        window.open(videoUrl, "_blank", "width=800,height=600");
    });
});
