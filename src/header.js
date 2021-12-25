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
    item1.innerHTML = '<a href="#" class="menuLink">Item 1</a>';
    menu.appendChild(item1);
    navMenu.appendChild(menu);
    container.appendChild(navMenu);


    return container;
}