export default function renderHeader() {
    const container = document.createElement('header');

    //Site name / logo
    const siteName = document.createElement('p');
    siteName.innerText = 'SlowFood';
    siteName.classList.add('siteName');
    container.appendChild(siteName);


    //Menu
    const navMenu = document.createElement('div');
    const menu = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.innerHTML = '<a href="#" class="menuLink">Presentation</a>';
    const item2 = document.createElement('li');
    item2.innerHTML = '<a href="#" class="menuLink">Menu</a>';
    const item3 = document.createElement('li');
    item3.innerHTML = '<a href="#" class="menuLink">About us</a>';
    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    navMenu.appendChild(menu);
    container.appendChild(navMenu);

    return container;
}