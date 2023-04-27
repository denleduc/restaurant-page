import kitchenImg from './res/kitchen.jpg';

export default function renderAbout() {
    const container = document.createElement('div');
    container.classList.add('about');

    //Real about section
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('aboutContainer');

    const topText = document.createElement('p');
    topText.classList.add('topText');
    topText.innerText = 'About us';
    aboutContainer.appendChild(topText);

    const aboutUsTxt = document.createElement('p');
    aboutUsTxt.innerText = 'Since we opened in 1974, we only dreamed of one thing: making people appreciate what they eat. ' +
                           'And we think we are actually succeeding! In our restaurant, you\'ll find many different dishes ' +
                           'and we are sure that at you\'ll like at least one!';
    aboutContainer.appendChild(aboutUsTxt);

    const kitchen = new Image();
    kitchen.src = kitchenImg;
    kitchen.classList.add('kitchenImg');
    aboutContainer.appendChild(kitchen);

    const findUsTxt = document.createElement('p');
    findUsTxt.innerText = 'Want to test ? Great! You can find us at "insert the name of a street of the city you live in"!'
    aboutContainer.appendChild(findUsTxt);


    //Credits
    const creditsContainer = document.createElement('div');
    creditsContainer.classList.add('creditsContainer');

    const creditsTop = document.createElement('p');
    creditsTop.classList.add('topText');
    creditsTop.innerText = 'Credits';
    creditsContainer.appendChild(creditsTop);

    const credit1 = document.createElement('p');
    const credit2 = document.createElement('p');
    const credit5 = document.createElement('p');
    const credit3 = document.createElement('p');
    const credit4 = document.createElement('p');
    const credit6 = document.createElement('p');
    credit1.innerHTML = 'Restaurant photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    credit2.innerHTML = 'Background photo by <a href="https://unsplash.com/@danielcgold?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Gold</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    credit5.innerHTML = 'Kitchen photo by <a href="https://unsplash.com/@michaelwb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Browning</a> on <a href="https://unsplash.com/s/photos/kitchen-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    credit3.innerHTML = 'Cantarell font from Google Fonts. Licensed under the SIL Open Font License, Version 1.1';
    credit4.innerHTML = 'Licorice font from Google Fonts. Licensed under the SIL Open Font License, Version 1.1';
    credit6.innerHTML = 'This license is available in the source code (OFL.txt file) and with a FAQ at: <a href="http://scripts.sil.org/OFL">http://scripts.sil.org/OFL</a>';
    creditsContainer.appendChild(credit1);
    creditsContainer.appendChild(credit2);
    creditsContainer.appendChild(credit5);
    creditsContainer.appendChild(credit3);
    creditsContainer.appendChild(credit4);
    creditsContainer.appendChild(credit6);

    container.appendChild(aboutContainer);
    container.appendChild(creditsContainer);
    return container;
}