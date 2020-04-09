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

const carouselStretch = document.querySelector('.carousel-container');


const Carousel = () => {

    const carousel = document.createElement('div');
    const leftButton = document.createElement('div');
    const imgOne = document.createElement('img');
    const imgTwo = document.createElement('img');
    const imgThree = document.createElement('img');
    const imgFour = document.createElement('img');
    const rightButton = document.createElement('div');


    carousel.appendChild(leftButton);
    carousel.appendChild(imgOne);
    carousel.appendChild(imgTwo);
    carousel.appendChild(imgThree);
    carousel.appendChild(imgFour);
    carousel.appendChild(rightButton);

    carousel.classList.add('carousel');
    leftButton.classList.add('left-button');
    rightButton.classList.add('right-button');

    leftButton.textContent = '<';
    rightButton.textContent = '>';
    imgOne.src = './assets/carousel/mountains.jpeg'
    alt = '1';
    imgTwo.src = './assets/carousel/computer.jpeg'
    alt = '2';
    imgThree.src = './assets/carousel/trees.jpeg'
    alt = '3';
    imgFour.src = './assets/carousel/turntable.jpeg'
    alt = '4';

    imgOne.style.display = 'block';
    carouselStretch.appendChild(carousel);

    //defining global counter
    var counter = 0;
    var items = Array.from(document.querySelectorAll('.carousel img'));
    var amount = items.length;
    var current = items[0];

    carouselStretch.classList.add('active');



    //function to navigate
    function navigate(direction) {

        current.classList.remove('current');

        counter = (counter + direction) % amount;
        counter = counter < 0 ? amount - 1 : counter;

        current = items[counter];
        current.classList.add('current');

        //event handlers for buttons
        leftButton.addEventListener('click', event => {
            navigate(1);
            console.log('click left working');
        });

        rightButton.addEventListener('click', event => {
            console.log('click right working');
            navigate(-1);
        });
        navigate(0);

    };
};

Carousel();