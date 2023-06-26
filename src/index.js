import _ from 'lodash'
import './style.css';

import pageLoad from './pageLoad';

//All content is appended to this div.
const content = document.createElement('div');
content.setAttribute('id', 'content');

function component(focus) {

    content.appendChild(pageLoad(focus));
 
    return content;
}

document.body.appendChild(component("home"));

let cont = document.getElementById('main-section');

document.getElementById('tab1').addEventListener('click', (e) => {

    cont.parentNode.removeChild(cont);
    content.appendChild(pageLoad("home"));
});

document.getElementById('tab2').addEventListener('click', (e) => {

    cont.parentNode.removeChild(cont);
    content.appendChild(pageLoad("about"));
});

document.getElementById('tab3').addEventListener('click', (e) => {

    component("contact");
});
