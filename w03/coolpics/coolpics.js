document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

  window.addEventListener("resize", handleResize);
  handleResize();

  const gallery = document.querySelector(".gallery");
  const modal = document.createElement("dialog");
  modal.classList.add("image-modal");
  document.body.appendChild(modal);

  gallery.addEventListener("click", (event) => {
    const clickedImage = event.target.closest("img");
    if (!clickedImage) return;

    const alt = clickedImage.alt;
    const src = clickedImage.src.split("-")[0] + "-full.jpeg";

    modal.innerHTML = `
      <img src="${src}" alt="${alt}">
      <button class="close-viewer">X</button>
    `;

    modal.showModal();

    const closeBtn = modal.querySelector(".close-viewer");
    closeBtn.addEventListener("click", () => {
      modal.close();
    });
  });

  modal.addEventListener("click", (event) => {
    const image = modal.querySelector("img");
    if (event.target === modal && !image.contains(event.target)) {
      modal.close();
    }
  });
});
