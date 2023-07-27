import pizza_intro from "../img/pizza-intro.jpg";

export default function home() {


    //Intro
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
    intro_left.appendChild(button('Get Started'));

    intro.appendChild(intro_left);

    const intro_right = document.createElement('div');
    intro_right.setAttribute('class', 'intro-right');

    
    const intro_img = document.createElement('img');
    intro_img.setAttribute('src', pizza_intro);
    intro_img.setAttribute('width', '500px');

    intro_right.appendChild(intro_img);

    intro.appendChild(intro_right);

    return intro;
    
}

function button(txt) {

    const button = document.createElement('button');
    button.setAttribute('class', 'btn btn-danger');
    button.innerHTML = txt;

    return button;

}