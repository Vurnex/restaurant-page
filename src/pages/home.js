export default function home() {

    const intro = document.createElement('section');
    intro.setAttribute('class', 'intro section-position');

    const intro_left = document.createElement('div');
    intro_left.setAttribute('class', 'intro-left sub-section-position');
    
    intro.appendChild(intro_left);

    const intro_h6 = document.createElement('h6');
    const intro_h1 = document.createElement('h1');
    const intro_para = document.createElement('p');

    intro_h6.textContent = "Stand Out";
    intro_h1.textContent = "Pizza Restaurant Site";
    intro_para.textContent = 
    `
    Modern and carefully prepared pizzas for every customer - 
    just waiting for the perfect topping in the form of your content!

    `;

    intro_left.appendChild(intro_h6);
    intro_left.appendChild(intro_h1);
    intro_left.appendChild(intro_para);
    //intro_left.appendChild(button('Get Started'));

    intro.appendChild(intro_left);

    return intro;
    
}

function button(txt) {

    const button = document.createElement(button);
    button.setAttribute('class', 'btn btn-danger');
    button.textContent = txt;

    return button;

}