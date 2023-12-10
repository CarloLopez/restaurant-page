"use strict";

import 'normalize.css';
import './style.css';
import renderHome from './renderHome.js'
import renderMenu from './renderMenu.js'


const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

homeButton.addEventListener('click', renderHome);
menuButton.addEventListener('click', renderMenu);