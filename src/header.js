export default function renderHeader() {
    const container = document.createElement('header');

    //Site name / logo
    const siteName = document.createElement('p');
    siteName.innerText = 'SlowFood';
    siteName.classList.add('siteName');
    container.appendChild(siteName);


    //Menu
    const navMenu = document.createElement('div');
    const item1 = document.createElement('button');
    item1.classList.add('specificBtn');
    item1.innerText = 'Presentation';
    const item2 = document.createElement('button');
    item2.innerText = 'Menu';
    const item3 = document.createElement('button');
    item3.innerText = 'About us';
    navMenu.appendChild(item1);
    navMenu.appendChild(item2);
    navMenu.appendChild(item3);
    container.appendChild(navMenu);

    return container;
}