// Menu
const menuItems = document.getElementById("menuItems");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const items = document.querySelectorAll("nav .menuItems li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

items.forEach(item => {
    item.addEventListener("click", function() {
        close();
    });
});

function show() {
    menuItems.style.display = "flex";
    menuItems.style.right = "0";
    document.body.style.overflow = "hidden";
}

function close() {
    menuItems.style.right = "-110%";
    document.body.style.overflow = "auto";
}

// Date 
function updateClock() {
    const now = new Date();

    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString();
    const day = now.getDate().toString();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);

    const timeString = `${year} - ${month} - ${day} - ${hours}:${minutes}`;

    document.getElementById("date").textContent = timeString
}

updateClock();
setInterval(updateClock, 60000);

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

fetch("./javascript/news.json")
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