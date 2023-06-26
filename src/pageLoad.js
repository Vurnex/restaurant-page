import nav from "./headers/nav";
import tabs from "./headers/tabs";

import home from "./pages/home";
import about from "./pages/about";

export default function pageLoad(focus) {

    //console.log('I get called from pageLoad.js!');

    const content = document.createElement('section');
    content.setAttribute('class', 'main');
    content.setAttribute('id', 'main-section')

    const header = document.createElement('h1');
    header.innerHTML = "Test header";

    content.appendChild(nav());
    content.appendChild(tabs());

    if (focus == "home") {


        content.appendChild(home());
    }
    
    else if (focus == "about") {

        content.appendChild(about());

    }

    else if (focus == "contact") {

    }    
    
    return content;

};