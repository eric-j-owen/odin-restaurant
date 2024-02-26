import home from "./home";
import menu from "./menu";
import about from "./about";

const content = document.querySelector('#content');
home();
document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.classList.contains("home")) {
        content.textContent = '';
        home();
    } else if (e.target.classList.contains("menu")) {
        content.textContent = '';
        menu();
    } else if (e.target.classList.contains("about")) {
        content.textContent = '';
        about();
    }
});
