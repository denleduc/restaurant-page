import './res/css/presentation.css';

export default function renderPresentation() {
    const container = document.createElement('main');
    container.classList.add('header');
    container.id = "header";

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restName');
    restaurantName.innerText = 'Slow Food';
    container.appendChild(restaurantName);

    const restaurantDesc = document.createElement('h2');
    restaurantDesc.classList.add('restaurantDesc');
    restaurantDesc.innerText = 'Bienvenue au SlowFood!';
    
    container.appendChild(restaurantDesc);

    const exploreText = document.createElement('p');
    exploreText.classList.add('restaurantDesc');
    exploreText.innerText = 'Feel free to explore our website to discover our dishes, our history and our location!';
    container.appendChild(exploreText);

    return container;
}