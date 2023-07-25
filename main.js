const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
    menu.computedStyleMap.visibility = "hidden";
});
open.addEventListener("click", () => {
    menu.computedStyleMap.visibility = "visible";
})