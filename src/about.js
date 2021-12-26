import license from './OFL.txt';

export default function renderAbout() {
    const container = document.createElement('div');
    container.classList.add('about', 'invisible');

    //Real about section
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('aboutContainer');

    const topText = document.createElement('p');
    topText.classList.add('topText');
    topText.innerText = 'About us';
    aboutContainer.appendChild(topText);


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
    credit1.innerHTML = 'Restaurant photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    credit2.innerHTML = 'Background photo by <a href="https://unsplash.com/@danielcgold?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Gold</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    credit5.innerHTML = 'Kitchen photo by <a href="https://unsplash.com/@michaelwb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Browning</a> on <a href="https://unsplash.com/s/photos/kitchen-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    credit3.innerHTML = 'Cantarell font from Google Fonts. Licensed under the SIL Open Font License, Version 1.1';
    credit4.innerHTML = 'Licorice font from Google Fonts. Licensed under the SIL Open Font License, Version 1.1';
    creditsContainer.appendChild(credit1);
    creditsContainer.appendChild(credit2);
    creditsContainer.appendChild(credit5);
    creditsContainer.appendChild(credit3);
    creditsContainer.appendChild(credit4);
    const licenseText = document.createElement('p');
    licenseText.innerText = license;
    creditsContainer.appendChild(licenseText);

    container.appendChild(aboutContainer);
    container.appendChild(creditsContainer);
    return container;
}