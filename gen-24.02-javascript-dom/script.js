document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("main");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            mainImage.classList.remove("opacity-100");
            mainImage.classList.add("opacity-0");

            setTimeout(() => {
                mainImage.src = thumbnail.src;

                mainImage.classList.remove("opacity-0");
                mainImage.classList.add("opacity-100");
            }, 300);
        });
    });
});
