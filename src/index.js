import _ from 'lodash'
import './style.css';

import pageLoad from './pageLoad';

function component() {
    
    //All content is appended to this div.
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    content.appendChild(pageLoad());
 
    return content;
}

document.body.appendChild(component());
