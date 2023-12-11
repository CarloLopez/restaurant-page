"use strict";

import 'normalize.css';
import './style.css';
import {renderHome, loadHome} from './renderHome.js';
import loadMenu from './renderMenu.js';
import loadAbout from './renderAbout.js';

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

homeButton.addEventListener('click', loadHome);
menuButton.addEventListener('click', loadMenu);
aboutButton.addEventListener('click', loadAbout);

renderHome();