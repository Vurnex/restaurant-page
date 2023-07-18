import nav from "./headers/nav";
import tabs from "./headers/tabs";

import home from "./pages/home";
import menu from "./pages/menu";

export default function pageLoad(focus) {

    //console.log('I get called from pageLoad.js!');

    const content = document.createElement('section');
    content.setAttribute('class', 'main');
    content.setAttribute('id', 'main-section');

    if (focus == "home") {


        content.appendChild(home());
    }
    
    else if (focus == "menu") {

        content.appendChild(menu());

    }

    else if (focus == "contact") {

    }    
    
    return content;

};