import footer from "../footer/footer";

export default function menu() {

    //Append all content to this div
    const content = document.createElement('div');

    //Intro
    const intro = document.createElement('section');
    intro.setAttribute('class', 'intro section-position');

    const intro_left = document.createElement('div');
    intro_left.setAttribute('class', 'intro-left sub-section-position');
    
    intro.appendChild(intro_left);

    const intro_h1 = document.createElement('h1');
    const intro_para = document.createElement('p');

    intro_h1.textContent = "Test menu";
    intro_para.textContent = 
    `
    Test menu tab.

    `;

    intro_left.appendChild(intro_h1);
    intro_left.appendChild(intro_para);

    intro.appendChild(intro_left);


    const intro_right = document.createElement('div');
    intro_right.setAttribute('class', 'intro-right');


    intro.appendChild(intro_right);


    //Append content
    content.appendChild(intro);
    content.appendChild(footer());

    return content;
    
}

function button(txt) {

    const button = document.createElement('button');
    button.setAttribute('class', 'btn btn-danger');
    button.innerHTML = txt;

    return button;

}