export default function renderHeader() {
    const container = document.createElement('header');

    //Site name / logo
    const siteName = document.createElement('p');
    siteName.innerText = 'SlowFood';
    siteName.classList.add('siteName');
    container.appendChild(siteName);


    //Menu
    const navMenu = document.createElement('div');
    navMenu.classList.add('nav')

    const item1 = document.createElement('button');
    item1.classList.add('btn');
    item1.innerText = 'Presentation';

    const item2 = document.createElement('button');
    item2.classList.add('btn');
    item2.innerText = 'Menu';

    const item3 = document.createElement('button');
    item3.classList.add('btn');
    item3.innerText = 'About us';
    
    navMenu.appendChild(item1);
    navMenu.appendChild(item2);
    navMenu.appendChild(item3);
    container.appendChild(navMenu);

    return container;
}