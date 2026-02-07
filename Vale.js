
let yesBtn = document.querySelector('.yes-btn');
let scale = 1;

document.querySelector('.yes-btn').addEventListener('click', () => {
  alert('Yay! 💖');
});

document.querySelector('.no-btn').addEventListener('click', () => {
  scale += 0.8;
  yesBtn.style.transform = `scale(${scale})`;
});
let images = document.querySelectorAll('.image-slider img');
let currentImage = 0;
setInterval(() => {
  images[currentImage].style.opacity = 0;
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.opacity = 1;
}, 5000);