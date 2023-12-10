import hotDogImg from './img/hotdog.svg';
import burgerImg from './img/burger.svg';
import eggImg from './img/egg.svg';
import pieImg from './img/pie.svg';

export default function renderMenu() {
    const content = document.querySelector('.main-content');

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    menuContent.classList.add('max-container');

    const hotdogDesc = "A juicy hotdog wrapped in bacon, topped with meteorite mustard, stardust cheese, and asteroid onions";
    const burgerDesc = "Ethically sourced space cow patty, smoky nebula cheese, cosmic lettuce, and tangy BBQ sauce on a planet-sized bun";
    const eggDesc = "Monster worm eggs scrambled, tentacle bacon, inferno pancakes with magma syrup, and optional ghost pepper hot sauce";
    const pieDesc = "A celestial pie with starfruit, stardust apples, meteorite blueberries, and a nebula crumble topping"

    const hotDog = createMenuItem('Cosmic Crunch Dog', hotDogImg, 'a hot dog', hotdogDesc);
    const burger = createMenuItem('Galactic Beefster', burgerImg, 'a burger', burgerDesc);
    const egg = createMenuItem('Exo-Omelette', eggImg, 'an egg', eggDesc);
    const pie = createMenuItem('Nebular Pie', pieImg, 'a pie', pieDesc);
    const menuItems = [hotDog, burger, egg, pie];

    for (let i = 0; i < menuItems.length; i++) {
        menuContent.appendChild(menuItems[i]);

        if (i < menuItems.length - 1) {
            const divider = document.createElement('hr');
            divider.classList.add('divider');
            menuContent.appendChild(divider);
        }
    }

    content.appendChild(menuContent);
}

function createMenuItem(name, imgsource, alt, desc, menuList) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.innerText = name;

    const itemImg = document.createElement('img');
    itemImg.classList.add('item-img');
    itemImg.src = imgsource;
    itemImg.alt = alt;


    const itemDesc = document.createElement('div');
    itemDesc.classList.add('item-desc');
    itemDesc.innerText = desc;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemImg);
    menuItem.appendChild(itemDesc);

    return menuItem;
}