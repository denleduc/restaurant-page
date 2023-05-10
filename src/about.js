
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

    container.appendChild(aboutContainer);
    container.appendChild(creditsContainer);
    return container;
}