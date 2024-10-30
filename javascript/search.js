// Search
const newsCardTemplate = document.querySelector("[data-news-template]");
const newsCardContainer = document.querySelector("[data-news-card-container]");
const searchInput = document.querySelector("[data-search]");

let newsLet = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    newsLet.forEach(news => {
        const isVisible =
        news.headline.toLowerCase().includes(value);
        news.element.classList.toggle("hide", !isVisible);
    });
});

fetch("news.json")
.then(res => res.json())
.then(data => {

    newsLet = data.map(news => {
        const card = newsCardTemplate.content.cloneNode(true).children[0];
        const headerImg = card.querySelector("[data-image]");
        const headline = card.querySelector("[data-headline]");

        headerImg.src = news.image;
        headline.textContent = news.headline;
        newsCardContainer.append(card);
        return { image: news.image, headline: news.headline, element: card }
    });
});