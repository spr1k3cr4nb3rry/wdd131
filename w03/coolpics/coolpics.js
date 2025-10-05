document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  // Toggle nav
  menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });

  // Image model
  const gallery = document.querySelector(".gallery");
  const model = document.createElement("dialog");
  model.classList.add("image-model");
  document.body.appendChild(model);

  gallery.addEventListener("click", (event) => {
    const clickedImage = event.target.closest("img");
    if (!clickedImage) return;

    const alt = clickedImage.alt;
    const src = clickedImage.src.split("-")[0] + "-full.jpeg";

    model.innerHTML = `
      <img src="${src}" alt="${alt}">
      <button class="close-viewer">X</button>
    `;

    model.showModal();

    model.querySelector(".close-viewer").addEventListener("click", () => {
      model.close();
    });
  });
});
