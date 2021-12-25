export default function renderAbout() {
    const container = document.createElement('div');
    container.classList.add('about', 'invisible');
    container.innerText = 'About section';

    return container;
}