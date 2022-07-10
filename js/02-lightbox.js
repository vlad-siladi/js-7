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
      return `
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      `;
    })
    .join("");
}

function onGalleryKontainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
