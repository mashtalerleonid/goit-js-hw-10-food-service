import dishCardTpl from "../templates/dish-card.hbs";
import menu from "../menu.json";

const menuEl = document.querySelector(".js-menu");

const markup = dishCardTpl(menu);

menuEl.insertAdjacentHTML("beforeend", markup);
