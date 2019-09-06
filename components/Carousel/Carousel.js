/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.lftButton = this.carousel.querySelector(".left-button");
        this.rgtButton = this.carousel.querySelector(".right-button");

        this.slides = this.carousel.querySelectorAll("img");
        this.slides = Array.from(this.slides);
        this.slides.forEach(slide => slide.style.zIndex = 1);
        this.counter = 0;
        this.slidesLength = this.slides.length;
        this.slidesIndex = this.slides[this.counter]
        this.changeLeft = this.changePrev.bind(this);
        this.lButton.addEventListener('click', this.changeLeft);
        this.changeRight = this.changeNext.bind(this);
        this.bButton.addEventListener('click', this.changeRight);
    }
}