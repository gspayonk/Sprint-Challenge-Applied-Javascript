// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(data => {
    const objectsArr = [];
    articlesTopic = data.data.articles;

    const valuesArr = Object.values(articlesTopic);

    valuesArr.forEach(data => {
        data.forEach(array => {
            objectsArr.push(array);
        });

    });

    objectsArr.forEach(cards => {
        let newArticle = Article(cards);

        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(newArticle);
    });
})

.catch(data => {
    console.log('error api');
});

function Article(cards) {
    const articleCard = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const articleAuthor = document.createElement('div');
    const articleImgCont = document.createElement('div');
    const articleImg = document.createElement('img');
    const articleAuthorName = document.createElement('span');

    articleCard.appendChild(articleHeadline);
    articleCard.appendChild(articleAuthor);
    articleAuthor.appendChild(articleImgCont);
    articleImgCont.appendChild(articleImg);
    articleAuthor.appendChild(articleAuthorName);

    articleCard.classList.add('card');
    articleHeadline.classList.add('headline');
    articleAuthor.classList.add('author');
    articleImgCont.classList.add('img-container');

    articleHeadline.textContent = cards.headline;
    articleImg.src = cards.authorPhoto;
    articleAuthorName.textContent = `By ${cards.authorName}`;

    return articleCard;

}