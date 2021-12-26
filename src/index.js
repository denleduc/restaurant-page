const page = document.querySelector('#pageContainer');
import renderHeader from "./header";
import renderPresentation from "./presentation";
import renderMenu from "./menu";
import renderAbout from "./about";
import renderFooter from "./footer";
import './style.css';

page.appendChild(renderHeader());
page.appendChild(renderPresentation());
page.appendChild(renderMenu());
page.appendChild(renderAbout());
document.body.appendChild(renderFooter());

//Getting elements after they have been created
const menuBtn = document.querySelector('.menuBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const presBtn = document.querySelector('.presBtn');
const presTab = document.querySelector('.main');
const aboutTab = document.querySelector('.about');
const menuTab = document.querySelector('.menu');

//Tab switching code

/* 
TODO: (I read it after having finished my tab logic)
Write the tab-switching logic inside of index.js. You should have event listeners
for each tab that wipes out the current contents and then runs the correct ‘tab module’
to populate it again.
*/

presBtn.addEventListener('click', () => {
    menuTab.classList.remove('visible');
    menuTab.classList.add('invisible');

    aboutTab.classList.remove('visible');
    aboutTab.classList.add('invisible');

    presTab.classList.remove('invisible');
    presTab.classList.add('visible');
});

menuBtn.addEventListener('click', () => {
    menuTab.classList.remove('invisible');
    menuTab.classList.add('visible');

    aboutTab.classList.remove('visible');
    aboutTab.classList.add('invisible');

    presTab.classList.remove('visible');
    presTab.classList.add('invisible');
});

aboutBtn.addEventListener('click', () => {
    menuTab.classList.remove('visible');
    menuTab.classList.add('invisible');

    aboutTab.classList.remove('invisible');
    aboutTab.classList.add('visible');

    presTab.classList.remove('visible');
    presTab.classList.add('invisible');
});