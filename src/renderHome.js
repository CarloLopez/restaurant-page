export default function renderHome() {
    const content = document.querySelector('.main-content');
    
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    homeContent.classList.add('max-container');

    const divider = document.createElement('hr');
    divider.classList.add('divider');

    const heroContainer = renderHero();
    const callContainer = renderCallToAction();

    homeContent.appendChild(heroContainer);
    homeContent.appendChild(divider);
    homeContent.appendChild(callContainer);

    content.appendChild(homeContent);
}

function renderHero() {
    const heroContainer = document.createElement('div');
    heroContainer.classList.add('hero-container');

    const heroTop = document.createElement('div');
    heroTop.classList.add('hero-top');
    heroTop.innerText = 'WELCOME TO THE';

    const heroMain = document.createElement('div');
    heroMain.classList.add('hero-main');
    heroMain.innerText = 'SPACE CANTINA';

    heroContainer.appendChild(heroTop);
    heroContainer.appendChild(heroMain);

    return heroContainer;
}

function renderCallToAction() {
    const callContainer = document.createElement('div');
    callContainer.classList.add('call-container');

    const callText = document.createElement('div');
    callText.classList.add('call-text');
    callText.innerText = "BEAM INTO OUR SPACE HUB NOW!"
    
    const bookTableButton = document.createElement('button');
    bookTableButton.classList.add('bookTableButton');
    bookTableButton.innerText = 'Book Table';

    callContainer.appendChild(callText);
    callContainer.appendChild(bookTableButton);

    return callContainer;
}