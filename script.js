function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
}
document.addEventListener("click", function(event) {
    const menu = document.querySelector(".menu");
    const menuIcon = document.querySelector(".menu-icon");

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("show");
    }
});

