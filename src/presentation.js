import './res/css/presentation.css';

export default function renderPresentation() {
    const container = document.createElement('main');
    container.classList.add('header');
    container.id = "header";

    //Div for restaurant name and photo
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('presDiv');

    const restaurantName = document.createElement('p');
    restaurantName.classList.add('restName');
    restaurantName.innerText = 'Slow Food';
    mainDiv.appendChild(restaurantName);

    const imgDesc = document.createElement('p');
    imgDesc.innerText = 'Our interior (well, almost)';
    imgDesc.classList.add('small');
    mainDiv.appendChild(imgDesc);

    const restaurantDesc = document.createElement('p');
    restaurantDesc.classList.add('restaurantDesc');
    restaurantDesc.innerText = 'Welcome to our restaurant! Here, you\'ll take ' + 
                               'all the time you need to eat and enjoy our dishes!' +
                               ' As our name suggests, we\'re the exact opposite of your favorite fast-food!';
    
    mainDiv.appendChild(restaurantDesc);

    const exploreText = document.createElement('p');
    exploreText.classList.add('restaurantDesc');
    exploreText.innerText = 'Feel free to explore our website to discover our dishes, our history and our location!';
    mainDiv.appendChild(exploreText);

    container.appendChild(mainDiv);
    return container;
}