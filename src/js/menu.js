import menuLi from '../templates/menu-card.hbs';
import cardList from '../menu.json';

// const menuCardEl = createMenuCard(cardList);
const menuListAdd = document.querySelector('.js-menu');
const card = createMenuCard(cardList);

menuListAdd.insertAdjacentHTML('beforeend', card);

function createMenuCard(cardList) {
    return cardList.map(menuLi).join('');
}
