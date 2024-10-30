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