// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabsContainer = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log(data);
        data.data.topics.forEach(title => {
            tabMaker = document.createElement('tab');
            tabMaker.classList.add('tab')

            tabsContainer.appendChild(tabMaker);
            tabMaker.textContent = `${title}`

            return tabMaker;

        })
    })

// tabMaker.addEventListener('click', event => {
//     tabMaker.classList.toggle('active-tab')
// })