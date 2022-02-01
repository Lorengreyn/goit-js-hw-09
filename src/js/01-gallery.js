import SimpleLightbox from "SimpleLightbox";
import "SimpleLightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector(`.gallery`);

const galleryMarkup = galleryItems.map(({ preview, original, description }) => { 
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
  </a>
  </li>`;
  })
    .join("");
  
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


console.log(galleryItems);

