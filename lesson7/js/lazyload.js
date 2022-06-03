const lazyImages = document.querySelectorAll("[data-src]");

function placeholderImage(img) {
    const srcImage = img.getAttribute("data-src");
    if (!srcImage) {
        return;
    }
    img.src = srcImage;
}

const setsImages = {};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            placeholderImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, setsImages);

lazyImages.forEach(image =>{
    imgObserver.observe(image);
});


/*
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

images.forEach((img) => {
    loadImages(img);
});

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    images.forEach((img) => {
      observer.observe(img);
    });
  } else {
    images.forEach((img) => {
      loadImages(img);
    });
  }
  */