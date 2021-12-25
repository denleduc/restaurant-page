const page = document.querySelector('#pageContainer');
import renderHeader from "./header";
import renderPresentation from "./presentation";
import renderFooter from "./footer";
import './style.css';

page.appendChild(renderHeader());
page.appendChild(renderPresentation());
document.body.appendChild(renderFooter());