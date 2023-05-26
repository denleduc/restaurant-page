const page = document.querySelector('#pageContainer');
import renderHeader from "./nav";
import renderPresentation from "./presentation";
import renderMenu from "./menu";
import renderAbout from "./about";
import renderFooter from "./footer";
import './res/css/style.css';

document.body.prepend(renderHeader());
function appendPage(section) {
    page.appendChild(section);
}

appendPage(renderPresentation());
appendPage(renderMenu());

//Getting elements after they have been created
const menuBtn = document.querySelector('.menuBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const presBtn = document.querySelector('.presBtn');

function removeActiveClass() {
    menuBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    presBtn.classList.remove('active');
}

let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.51
};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting === false) {
            
        }
        else {
            removeActiveClass();
            if (entry.target.classList.contains('menu') === true) {
                menuBtn.classList.add('active');
            }
            if (entry.target.classList.contains('header') === true) {
                presBtn.classList.add('active');
            }
        }
    });
}, observerOptions);

observer.observe(document.querySelector('.header'));
observer.observe(document.querySelector('.menu'));