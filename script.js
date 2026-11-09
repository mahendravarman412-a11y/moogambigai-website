const gallery = document.getElementById("gallery-grid");

const sculptures = Array.from({ length: 30 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
        image: `images/sculpture-${number}.jpg`,
        title: `Sculpture ${number}`
    };
});

sculptures.forEach((item) => {
    const card = document.createElement("div");
    card.className = "gallery-card";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    img.loading = "lazy";

    img.onerror = () => card.remove();

    const title = document.createElement("p");
    title.textContent = item.title;

    card.append(img, title);
    gallery.appendChild(card);
});

console.log("Moogambigai website loaded successfully!");
