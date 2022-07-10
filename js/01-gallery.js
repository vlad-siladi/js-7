import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMurcup = greateGalleryMurkup(galleryItems);

galleryContainer.addEventListener("click", onGalleryKontainerClick);

galleryContainer.insertAdjacentHTML("beforeend", galleryMurcup);

function greateGalleryMurkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onGalleryKontainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
    `);

  instance.show();

  window.addEventListener("keydown", onEscKeyPres);
  function onEscKeyPres(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
    if (instance.close()) {
      window.removeEventListener("keydown", onEscKeyPres);
    }
    console.log(evt.code);
  }
}
