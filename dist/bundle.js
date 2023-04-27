(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),s=t(645),i=t.n(s),o=t(667),c=t.n(o),d=new URL(t(910),t.b),l=i()(a());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]),l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Licorice&display=swap);"]);var p=c()(d);l.push([e.id,"* {\r\n    font-family: 'Cantarell';\r\n}\r\n\r\nheader,\r\nfooter,\r\n.presDiv,\r\n.txtContainer,\r\n.dishText,\r\n.mainDishes,\r\n.dessertsDishes,\r\n.otherDishes,\r\n.about {\r\n    background: rgba(0,0,0, 0.75);\r\n    color: #FFF;\r\n    border-radius: 20px;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\na {\r\n    color: #FEE;\r\n}\r\nbody {\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    background: url("+p+");\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n\r\n#pageContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: none;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 1vw;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    gap: 2vw;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.btn {\r\n    border: none;\r\n    padding: .3vw .5vw .3vw .5vw;\r\n    font-size: 1.2em;\r\n    background-color: rgba(255,255,255, 0.3);\r\n    color: white;\r\n    border-radius: 10px;\r\n}\r\n\r\n.btn:hover {\r\n    background-color:black;\r\n}\r\n\r\n.siteName {\r\n    color: white;\r\n    font-family: 'Licorice', 'sans-serif';\r\n    font-size: 2.4em;\r\n    font-style: italic;\r\n    margin: 1vh 0 2vh 0;\r\n}\r\n\r\n.main {\r\n    align-self: center;\r\n    justify-content: center;\r\n    margin: 5vh 0 5vh 0;\r\n}\r\n\r\n.presDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 70vw;\r\n}\r\n\r\n.restName {\r\n    font-family: 'Licorice', 'sans-serif';\r\n    font-size: 3.5em;\r\n    margin: 0;\r\n    padding: 2vw;\r\n}\r\n\r\n.restaurantDesc {\r\n    text-align: center;\r\n}\r\n\r\n.menu {\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    gap: 5vh;\r\n    padding: 1vw;\r\n}\r\n\r\n.subtText {\r\n    text-align: center;\r\n}\r\n\r\n.txtContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 70vw;\r\n}\r\n\r\n.dish {\r\n    width: 250px;\r\n    height: 300px;\r\n    padding: 15px;\r\n    border-radius: 15px;\r\n    background-color: rgba(0,0,0, 0.85);\r\n    box-shadow: 0px 0px 20px 10px rgba(0,0,0, 0.4);\r\n    transition: all ease .05s;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.dish:hover {\r\n    background-color: rgba(0,0,0, 1);\r\n    transform: scale(1.01);\r\n}\r\n\r\n.menuContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5vh;\r\n}\r\n.mainDishes,\r\n.dessertsDishes,\r\n.otherDishes {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5vw;\r\n    width: 70vw;\r\n    padding: 2vw 1vw 2vw 1vw;\r\n    border-radius: 20px;\r\n}\r\n\r\n.about {\r\n    align-self: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70vw;\r\n    margin: 5vh 0 5vh 0;\r\n}\r\n\r\n.aboutContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    padding: 2vw;\r\n}\r\n\r\n.kitchenImg {\r\n    width: 35vw;\r\n    height: auto;\r\n}\r\n\r\n.creditsContainer {\r\n    padding: 2vw;\r\n    text-align: center;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.visible {\r\n    display: flex;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.small {\r\n    font-size: 0.8em;\r\n}\r\n\r\n.em {\r\n    font-size: 1.1em;\r\n    font-weight: 500;\r\n}\r\n\r\n.topText {\r\n    font-size: 1.6em;\r\n    font-weight: 600;\r\n}\r\n\r\n.dishName {\r\n    font-size: 1.3em;\r\n    font-style: italic;\r\n    font-weight: 500;\r\n}\r\n\r\n.dishDesc {\r\n    font-style: italic;\r\n    color:silver;\r\n}\r\n\r\n.dishIngredients {\r\n    font-size: 0.9em;\r\n}\r\n\r\n.dishText {\r\n    padding: 2vw;\r\n    font-size: 1.2em;\r\n    font-weight: 400;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    header {\r\n        flex-direction: column;\r\n    }\r\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var s={},i=[],o=0;o<e.length;o++){var c=e[o],d=r.base?c[0]+r.base:c[0],l=s[d]||0,p="".concat(d," ").concat(l);s[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,r);r.byIndex=o,n.splice(o,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var s=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var o=t(s[i]);n[o].references--}for(var c=r(e,a),d=0;d<s.length;d++){var l=t(s[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}s=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},910:(e,n,t)=>{e.exports=t.p+"9e657e4801c0947c509b.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var s=n[r]={id:r,exports:{}};return e[r](s,s.exports,t),s.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"9ece4d1d309f04b1ca6f.jpg",n=JSON.parse('{"R":[{"name":"Basil and garam masala bread","description":"Fluffy bread made with fresh basil and garam masala","type":"main","ingredients":["flour","salt","yeast","butter","water","onions","basil","garam masala"]},{"name":"Aubergine and pesto lasagne","type":"main","description":"Layers of fresh egg pasta interspersed with fresh aubergine and red pesto","ingredients":["tomato","passata","onion","garlic","pasta","oregano","black pepper","basil","aubergine","pesto"]},{"name":"Beef and squash lasagne","type":"main","description":"Layers of fresh egg pasta interspersed with beef and acorn squash","ingredients":["tomato","passata","onion","garlic","pasta","oregano","black pepper","basil","beef","squash"]},{"name":"Pepper and cheese lasagne","type":"main","description":"Layers of fresh egg pasta interspersed with green pepper and mature cheese","ingredients":["tomato","passata","onion","garlic","pasta","oregano","black pepper","basil","pepper","cheese"]},{"name":"Red onion salad with basil dressing","type":"main","description":"A mouth-watering red onion salad served with basil dressing","ingredients":["cucumber","lettuce","cress","red onion","basil"]},{"name":"Pumpkin and sugar cake","type":"dessert","description":"Rich cake made with fresh pumpkin and caster sugar","ingredients":["flour","butter","egg","sugar","pumpkin"]},{"name":"Almond and cinnamon muffins","type":"dessert","description":"Rich muffins made with toasted almond and cinnamon","ingredients":["flour","butter","egg","sugar","almond","cinnamon"]},{"name":"Apple and banana buns","type":"dessert","description":"Moist buns made with dessert apple and fresh banana","ingredients":["flour","butter","egg","sugar","apple","banana"]},{"name":"Apple and banana crepes","type":"dessert","description":"Fluffy crepes filled with fresh apple and banana","ingredients":["flour","butter","egg","milk","apple","banana"]},{"name":"Coffee","type":"other","description":"A coffee from the best producers","ingredients":["coffee","water","sugar"]}]}'),r=t.p+"200423ee7820bf44c190.jpg";var a=t(379),s=t.n(a),i=t(795),o=t.n(i),c=t(569),d=t.n(c),l=t(565),p=t.n(l),u=t(216),m=t.n(u),h=t(589),f=t.n(h),g=t(426),v={};v.styleTagTransform=f(),v.setAttributes=p(),v.insert=d().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=m(),s()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const b=document.querySelector("#pageContainer");b.appendChild(function(){const e=document.createElement("header"),n=document.createElement("p");n.innerText="SloooowFooood",n.classList.add("siteName"),e.appendChild(n);const t=document.createElement("div");t.classList.add("nav");const r=document.createElement("button");r.classList.add("presBtn","btn"),r.innerText="Presentation";const a=document.createElement("button");a.classList.add("menuBtn","btn"),a.innerText="Menu";const s=document.createElement("button");return s.classList.add("aboutBtn","btn"),s.innerText="About us",t.appendChild(r),t.appendChild(a),t.appendChild(s),e.appendChild(t),e}()),b.appendChild(function(){const n=document.createElement("div");n.classList.add("main","visible");const t=document.createElement("div");t.classList.add("presDiv");const r=document.createElement("p");r.classList.add("restName"),r.innerText="Slow Food",t.appendChild(r);const a=new Image;a.src=e,a.style.width="35vw",a.style.height="auto",t.appendChild(a);const s=document.createElement("p");s.innerText="Our interior (well, almost)",s.classList.add("small"),t.appendChild(s);const i=document.createElement("p");i.classList.add("restaurantDesc"),i.innerText="Welcome to our restaurant! Here, you'll take all the time you need to eat and enjoy our dishes! As our name suggests, we're the exact opposite of your favorite fast-food!",t.appendChild(i);const o=document.createElement("p");return o.classList.add("restaurantDesc"),o.innerText="Feel free to explore our website to discover our dishes, our history and our location!",t.appendChild(o),n.appendChild(t),n}()),b.appendChild(function(){const e=document.createElement("div");e.classList.add("menu","invisible");const t=document.createElement("div");t.classList.add("txtContainer");const r=document.createElement("p");r.classList.add("topText"),r.innerText="Menu",t.appendChild(r);const a=document.createElement("p");a.classList.add("subtText"),a.innerText="Take a look at the dishes you can order in our restaurant!",t.appendChild(a),e.appendChild(t);const s=document.createElement("div");s.classList.add("menuContainer");const i=document.createElement("div");i.innerText="Main dishes";const o=document.createElement("div");o.innerText="Desserts";const c=document.createElement("div");c.innerText="Others",i.classList.add("dishText"),o.classList.add("dishText"),c.classList.add("dishText");const d=document.createElement("div");d.classList.add("mainDishes");const l=document.createElement("div");l.classList.add("dessertsDishes");const p=document.createElement("div");return p.classList.add("otherDishes"),n.R.forEach((e=>{const n=document.createElement("div");n.classList.add("dish");const t=document.createElement("p");t.classList.add("dishName"),t.innerText=e.name,n.appendChild(t);const r=document.createElement("p");r.classList.add("dishDesc"),r.innerText=e.description,n.appendChild(r);const a=document.createElement("p");switch(a.classList.add("dishIngredients"),a.innerText="Ingredients: ",e.ingredients.forEach((e=>{a.innerText+=e+" | "})),n.appendChild(a),e.type){case"main":d.appendChild(n);break;case"dessert":l.appendChild(n);break;default:p.appendChild(n)}})),s.appendChild(i),s.appendChild(d),s.appendChild(o),s.appendChild(l),s.appendChild(c),s.appendChild(p),e.appendChild(s),e}()),b.appendChild(function(){const e=document.createElement("div");e.classList.add("about","invisible");const n=document.createElement("div");n.classList.add("aboutContainer");const t=document.createElement("p");t.classList.add("topText"),t.innerText="About us",n.appendChild(t);const a=document.createElement("p");a.innerText="Since we opened in 1974, we only dreamed of one thing: making people appreciate what they eat. And we think we are actually succeeding! In our restaurant, you'll find many different dishes and we are sure that at you'll like at least one!",n.appendChild(a);const s=new Image;s.src=r,s.classList.add("kitchenImg"),n.appendChild(s);const i=document.createElement("p");i.innerText='Want to test ? Great! You can find us at "insert the name of a street of the city you live in"!',n.appendChild(i);const o=document.createElement("div");o.classList.add("creditsContainer");const c=document.createElement("p");c.classList.add("topText"),c.innerText="Credits",o.appendChild(c);const d=document.createElement("p"),l=document.createElement("p"),p=document.createElement("p"),u=document.createElement("p"),m=document.createElement("p"),h=document.createElement("p");return d.innerHTML='Restaurant photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',l.innerHTML='Background photo by <a href="https://unsplash.com/@danielcgold?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Gold</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',p.innerHTML='Kitchen photo by <a href="https://unsplash.com/@michaelwb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Browning</a> on <a href="https://unsplash.com/s/photos/kitchen-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',u.innerHTML="Cantarell font from Google Fonts. Licensed under the SIL Open Font License, Version 1.1",m.innerHTML="Licorice font from Google Fonts. Licensed under the SIL Open Font License, Version 1.1",h.innerHTML='This license is available in the source code (OFL.txt file) and with a FAQ at: <a href="http://scripts.sil.org/OFL">http://scripts.sil.org/OFL</a>',o.appendChild(d),o.appendChild(l),o.appendChild(p),o.appendChild(u),o.appendChild(m),o.appendChild(h),e.appendChild(n),e.appendChild(o),e}()),document.body.appendChild(function(){const e=document.createElement("footer"),n=document.createElement("p");return n.classList.add("small"),n.innerText="Copyright © Denis L. 2021 - 2023 - Credits in the about tab",e.appendChild(n),e}());const y=document.querySelector(".menuBtn"),x=document.querySelector(".aboutBtn"),w=document.querySelector(".presBtn"),L=document.querySelector(".main"),C=document.querySelector(".about"),T=document.querySelector(".menu");w.addEventListener("click",(()=>{T.classList.remove("visible"),T.classList.add("invisible"),C.classList.remove("visible"),C.classList.add("invisible"),L.classList.remove("invisible"),L.classList.add("visible")})),y.addEventListener("click",(()=>{T.classList.remove("invisible"),T.classList.add("visible"),C.classList.remove("visible"),C.classList.add("invisible"),L.classList.remove("visible"),L.classList.add("invisible")})),x.addEventListener("click",(()=>{T.classList.remove("visible"),T.classList.add("invisible"),C.classList.remove("invisible"),C.classList.add("visible"),L.classList.remove("visible"),L.classList.add("invisible")}))})()})();