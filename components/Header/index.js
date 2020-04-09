// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

function Header() {

    const headerMain = document.createElement('div');
    const headerTitle = document.createElement('h1');
    const dateSpan = document.createElement('span');
    const tempSpan = document.createElement('span');

    headerMain.appendChild(dateSpan);
    headerMain.appendChild(headerTitle);
    headerMain.appendChild(tempSpan);

    dateSpan.classList.add('date');
    headerMain.classList.add('header');
    tempSpan.classList.add('temp');

    dateSpan.textContent = `SMARCH 28,2019`;
    headerTitle.textContent = `Lambda Times`;
    tempSpan.textContent = `98º`;

    console.log(headerMain)
    return headerMain;
}