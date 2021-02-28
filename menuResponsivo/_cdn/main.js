let menuIsOpwned = false
const button = document.querySelector("nav ul.button")
const menu = document.querySelector("nav ul.menu")

button.addEventListener("click", () => {
    if (!menuIsOpwned) {
        menu.style.display = "flex"
        menuIsOpwned = true
    } else {
        menu.style.display = "none"
        menuIsOpwned = false
    }
})