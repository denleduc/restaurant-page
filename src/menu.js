import dishes from './dishes.json';
import './res/css/menu.css';

export default function renderMenu() {
    const container = document.createElement('div');
    container.classList.add('menu');
    container.id = "menu";
    
    //Top text
    const topText = document.createElement('h2');
    topText.classList.add('menuHeading');
    topText.innerText = 'Menu';
    container.appendChild(topText);

    //Actual menu
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const mainDishesText = document.createElement('div');
    mainDishesText.innerText = "Main dishes";
    const dessertsText = document.createElement('div');
    dessertsText.innerText = "Desserts";
    const otherText = document.createElement('div');
    otherText.innerText = "Others";
    mainDishesText.classList.add('dishText');
    dessertsText.classList.add('dishText');
    otherText.classList.add('dishText');

    //Adding dishes from JSON to container
    const mainDishesContainer = document.createElement('div');
    mainDishesContainer.classList.add('mainDishes');
    const dessertsContainer = document.createElement('div');
    dessertsContainer.classList.add('dessertsDishes');
    const otherContainer = document.createElement('div');
    otherContainer.classList.add('otherDishes');

    for (let i = 0; i < dishes["Dishes"].length; i++) {
        const dishDiv = document.createElement('div');
        dishDiv.classList.add('dish');

        //Dish name
        const dishName = document.createElement('h3');
        dishName.classList.add('dishName');
        dishName.innerText = dishes["Dishes"][i].name;
        dishDiv.appendChild(dishName);

        //Dish description
        const dishDesc = document.createElement('p');
        dishDesc.classList.add('dishDesc');
        dishDesc.innerText = dishes["Dishes"][i].description;
        dishDiv.appendChild(dishDesc);

        //Ingredients
        const dishIngredients = document.createElement('p');
        dishIngredients.classList.add('dishIngredients');
        dishIngredients.innerText = 'Ingredients: ';
        for (let j = 0; j < dishes["Dishes"][i].ingredients.length; j++) {
            dishIngredients.innerText += dishes["Dishes"][i].ingredients[j];
            if (j !== dishes["Dishes"][i].ingredients.length - 1) {
                dishIngredients.innerText += ' | '
            }
        };
        dishDiv.appendChild(dishIngredients);

        switch (dishes["Dishes"][i].type) {
            case 'main':
                mainDishesContainer.appendChild(dishDiv);
                break;
            
            case 'dessert':
                dessertsContainer.appendChild(dishDiv);
                break;

            case 'other':
            default:
                otherContainer.appendChild(dishDiv);
                break;
        }
    }

    menuContainer.appendChild(mainDishesText);
    menuContainer.appendChild(mainDishesContainer);
    menuContainer.appendChild(dessertsText);
    menuContainer.appendChild(dessertsContainer);
    menuContainer.appendChild(otherText);
    menuContainer.appendChild(otherContainer);


    container.appendChild(menuContainer);
    return container;
}