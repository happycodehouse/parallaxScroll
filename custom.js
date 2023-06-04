let scrollNumber = 0;

const imageAll = document.querySelectorAll('.imageWrap .parallaxImage');
const totalNumber = imageAll.length;
const subPageImage = document.querySelector('.subPage .parallaxImage');
let x = 0;
let targetX = 0;
const speed = .1;

window.addEventListener('scroll', () => {
  scrollNumber = window.scrollY;

  imageAll.forEach((image, index) => {
    if(index < 4) {
      image.style.transform = `translateY(${-scrollNumber / 2.4 * (totalNumber - index)}px)`
    }
  });
})

window.addEventListener('mousemove', (e) => {
  x = e.pageX - window.innerWidth /2;

})

const loop = () => {

  targetX += (x - targetX) * speed;

  imageAll[4].style.transform = `scale(1.05) translate(${-targetX / 200}px, ${-scrollNumber / 2 * (totalNumber - 4)}px)`
  imageAll[5].style.transform = `scale(1.05) translate(${-targetX / 100}px, ${-scrollNumber / 2 * (totalNumber - 5)}px)`
  subPageImage.style.transform = `scale(1.1) translateX(${-targetX / 20}px)`;

  window.requestAnimationFrame(loop);

}

loop();