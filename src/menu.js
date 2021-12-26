export default function renderMenu() {
    const container = document.createElement('div');
    container.classList.add('menu', 'invisible');
    container.innerText = 'Menu section';

    return container;
}