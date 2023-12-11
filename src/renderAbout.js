import spaceMap from './img/space-map.png';

export default function loadAbout() {
    const content = document.querySelector('.main-content');
    content.innerHTML = '';
    renderAbout();
}

function renderAbout() {
    const content = document.querySelector('.main-content');

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const mapImg = document.createElement('img');
    mapImg.classList.add('about-img');
    mapImg.src = spaceMap;

    const contactForm = document.createElement('form');

    const contactTitle = document.createElement('div');
    contactTitle.classList.add('contact-title');
    contactTitle.innerText = 'RELAY MESSAGE';
    contactForm.appendChild(contactTitle);

    contactForm.appendChild(createInput('text', 'Name'));
    contactForm.appendChild(createInput('email', 'Email'));
    contactForm.appendChild(createInput('text', 'Message'));
    
    const button = document.createElement('button');
    button.innerText = 'RELAY';
    contactForm.appendChild(button);

    aboutContainer.appendChild(mapImg);
    aboutContainer.appendChild(contactForm);

    content.appendChild(aboutContainer);
}

function createInput(type, id) {
    const inputContainer = document.createElement('div');

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.innerText = id;

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    input.setAttribute('name', id);
 
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);

    return inputContainer;
}