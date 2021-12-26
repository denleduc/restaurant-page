import license from './OFL.txt';

export default function renderAbout() {
    const container = document.createElement('div');
    container.classList.add('about', 'invisible');

    //Real about section


    //Credits
    const creditsContainer = document.createElement('div');
    creditsContainer.classList.add('creditsContainer');
    const credits = document.createElement('p');
    credits.innerHTML = 'Restaurant photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' +
                        'Photo by <a href="https://unsplash.com/@zachephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zachary Edmundson</a> on <a href="https://unsplash.com/s/photos/city?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' +
                        'Cantarell font from Google Fonts. Licensed under the SIL Open Font License, Version 1.1';
    creditsContainer.appendChild(credits);
    const licenseText = document.createElement('p');
    licenseText.innerText = license;
    creditsContainer.appendChild(licenseText);

    container.appendChild(creditsContainer);
    return container;
}