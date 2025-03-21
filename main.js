onload = () =>{
        document.body.classList.remove("container");

        const audio = document.getElementById("miCancion");
        audio.play().catch(error => {
                console.error("Error al reproducir el audio:", error);
        });
};
