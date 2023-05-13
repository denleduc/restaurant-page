import './res/css/nav.css';

export default function renderNav() {
    const container = document.createElement('nav');
    container.classList.add('nav_background');

    //Menu
    const navMenu = document.createElement('div');
    navMenu.classList.add('nav')

    const item1 = document.createElement('a');
    item1.href = "#header";
    item1.classList.add('presBtn', 'link');
    item1.innerText = 'Presentation';

    const item2 = document.createElement('a');
    item2.href = "#menu";
    item2.classList.add('menuBtn', 'link');
    item2.innerText = 'Menu';

    const item3 = document.createElement('a');
    item3.href = "#";
    item3.classList.add('aboutBtn', 'link');
    item3.innerText = 'À propos';
    
    navMenu.appendChild(item1);
    navMenu.appendChild(item2);
    navMenu.appendChild(item3);
    container.appendChild(navMenu);

    return container;
}