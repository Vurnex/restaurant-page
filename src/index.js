import _ from 'lodash'
import './style.css';

import pageLoad from './pageLoad';
import nav from "./headers/nav";
import tabs from "./headers/tabs";

//All content is appended to this div.
const content = document.createElement('div');
content.setAttribute('id', 'content');

function component(focus) {

    content.appendChild(nav());
    content.appendChild(tabs());

    content.appendChild(pageLoad(focus));
 
    return content;
}

document.body.appendChild(component("home"));

document.getElementById('tab1').addEventListener('click', () => {

    //select the element every time since it is dynamically re-created on click
    let cont = document.getElementById('main-section');

    content.removeChild(cont);
    content.appendChild(pageLoad("home"));
});

document.getElementById('tab2').addEventListener('click', () => {

    let cont = document.getElementById('main-section');

    content.removeChild(cont);
    content.appendChild(pageLoad("menu"));
});

document.getElementById('tab3').addEventListener('click', () => {


});
