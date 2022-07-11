const menu = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
});

document.querySelectorAll(".mobile-nav a").forEach(n => n. 
    addEventListener("click", () => {
        menu.classList.remove("is-active");
        mobile_menu.classList.remove("is-active");
    }))