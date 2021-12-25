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


//Tab switching code
const presBtn = document.querySelector('.presBtn');
presBtn.addEventListener('click', () => {
    console.log('pres button clicked');
});

const menuBtn = document.querySelector('.menuBtn');
menuBtn.addEventListener('click', () => {
    console.log('menu button clicked');
});

const aboutBtn = document.querySelector('.aboutBtn');
aboutBtn.addEventListener('click', () => {
    console.log('about button clicked');
});