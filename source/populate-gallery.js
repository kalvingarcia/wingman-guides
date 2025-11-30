import content from '../public/gallery/content.json' with {type: "json"};

const DEFAULT_CHUNK_SIZE = 3;

(async () => {
    const chunkedContent = chunkArray(content, DEFAULT_CHUNK_SIZE);

    const galleryContainer = document.getElementById("gallery-content-dynamic");
    for(const chunk of chunkedContent) {
        const imageGroup = document.createElement("div");
        imageGroup.classList = ["gallery-image-group"];

        for(const imageObj of chunk)
            addImageToContainer(imageObj, imageGroup);

        galleryContainer.appendChild(imageGroup);
    }
})();

function chunkArray(array, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
};

function addImageToContainer(imageObj, parent) {
    const imageContainer = document.createElement("div");
    imageContainer.classList = ["gallery-image"];

    const image = document.createElement("img");
    image.src = imageObj.src;
    image.alt = imageObj.alt;
    imageContainer.appendChild(image);

    const hover = document.createElement("div");
    hover.classList = ["gallery-image-hover"];
    
    const overlay = document.createElement("div");
    overlay.classList = ["gallery-image-hover-overlay"];
    hover.appendChild(overlay);

    const text = document.createElement("span");
    text.classList = ["gallery-image-hover-text"];
    text.appendChild(document.createTextNode(imageObj.title));
    hover.appendChild(text);
    
    imageContainer.appendChild(hover);
    parent.appendChild(imageContainer);
}
