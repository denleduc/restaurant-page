import dishes from './dishes.json';

export default function renderMenu() {
    const container = document.createElement('div');
    container.classList.add('menu', 'invisible');
    
    //Top text
    const textContainer = document.createElement('div');

    const topText = document.createElement('p');
    topText.classList.add('topText');
    topText.innerText = 'Menu';
    textContainer.appendChild(topText);

    const subtitle = document.createElement('p');
    subtitle.classList.add('subtText');
    subtitle.innerText = 'Take a look at the dishes you can find in our restaurant!';
    textContainer.appendChild(subtitle);

    container.appendChild(textContainer);

    //Actual menu
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    console.log(dishes["Main dishes"]);
    dishes["Main dishes"].forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.classList.add('dish');
        const dishName = document.createElement('p');
        dishName.innerText = dish.name;
        dishDiv.appendChild(dishName);

        menuContainer.appendChild(dishDiv);
    });

    container.appendChild(menuContainer);
    return container;
}