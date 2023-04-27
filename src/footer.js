export default function renderFooter() {
    const container = document.createElement('footer');
    
    //Well it's simply the copyright thing
    const copyrightText = document.createElement('p');
    copyrightText.classList.add('small');
    copyrightText.innerText = 'Copyright © Denis L. 2021 - 2023 - Credits in the about tab';
    container.appendChild(copyrightText);
    
    return container;
}