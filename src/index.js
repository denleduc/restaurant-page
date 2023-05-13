const page = document.querySelector('#pageContainer');
import renderHeader from "./nav";
import renderPresentation from "./presentation";
import renderMenu from "./menu";
import renderAbout from "./about";
import renderFooter from "./footer";
import './res/css/style.css';

document.body.prepend(renderHeader());

function clearPage() {
    while (page.firstChild) {
        page.removeChild(page.firstChild);
    }
}

function appendPage(section) {
    page.appendChild(section);
    //page.appendChild(renderFooter());
}

appendPage(renderPresentation());
appendPage(renderPresentation());
appendPage(renderMenu());

//Getting elements after they have been created
const menuBtn = document.querySelector('.menuBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const presBtn = document.querySelector('.presBtn');