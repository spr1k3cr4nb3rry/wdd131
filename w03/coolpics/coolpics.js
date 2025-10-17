document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  /* --- Toggle Menu on Small Screens --- */
  menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });

  /* --- Handle Resize to Prevent Hidden Menu on Large Screens --- */
  function handleResize() {
    if (window.innerWidth >= 900) {
      mainNav.classList.remove("show");
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  /* --- Image Modal Functionality --- */
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

    const closeBtn = model.querySelector(".close-viewer");
    closeBtn.addEventListener("click", () => {
      model.close();
    });
  });

  // Optional: close modal when clicking outside the image
  model.addEventListener("click", (event) => {
    const image = model.querySelector("img");
    if (event.target === model && !image.contains(event.target)) {
      model.close();
    }
  });
});
