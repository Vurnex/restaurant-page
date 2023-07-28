import pizza_intro from "../img/pizza-intro.jpg";
import group_img from "../img/group.jpg";
import reservation_img from "../img/reservation.jpg";

export default function home() {

    //Append all content to this div
    const content = document.createElement('div');

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
    intro_left.appendChild(button('Get Started', 'btn btn-danger'));

    intro.appendChild(intro_left);


    const intro_right = document.createElement('div');
    intro_right.setAttribute('class', 'intro-right');

    const intro_img = document.createElement('img');
    intro_img.setAttribute('src', pizza_intro);
    intro_img.setAttribute('width', '500px');

    intro_right.appendChild(intro_img);

    intro.appendChild(intro_right);

    //About

    const about = document.createElement('section');
    about.setAttribute('class', 'about');

    const about_left = document.createElement('div');
    about_left.setAttribute('class', 'about-left');

    const about_h6 = document.createElement('h6');
    const about_h1 = document.createElement('h1');
    const about_para = document.createElement('p');

    about_h6.textContent = "Blog";
    about_h1.textContent = "THE NEW SPOT FOR PIZZA ENJOYERS";
    about_para.textContent = 

    `
    We pack a large selection of pre-made delicious dish layouts 
    as well as diverse toppings. Share all about your latest 
    promotions and menu changes.
    
    `;

    about_left.appendChild(about_h6);
    about_left.appendChild(about_h1);
    about_left.appendChild(about_para);
    about_left.appendChild(button('View More', 'btn btn-danger'));

    about.appendChild(about_left);

    const about_right = document.createElement('div');
    about_right.setAttribute('class', 'about-right');

    const about_img = document.createElement('img');
    about_img.setAttribute('src', group_img);
    about_img.setAttribute('width', '500px');

    about_right.appendChild(about_img);

    about.appendChild(about_right);

    //Booking

    const booking = document.createElement('section');
    booking.setAttribute('class', 'booking');

    const booking_left = document.createElement('div');
    booking_left.setAttribute('class', 'booking-left');

    const booking_img = document.createElement('img');
    booking_img.setAttribute('src', reservation_img);
    booking_img.setAttribute('width', '500px');

    booking_left.appendChild(booking_img);
    
    booking.appendChild(booking_left);

    const booking_right = document.createElement('div');
    booking_right.setAttribute('class', 'booking-right');

    const booking_h3 = document.createElement('h3');
    const booking_para = document.createElement('p');

    booking_h3.textContent = "RESERVATIONS MADE EASY";
    booking_para.textContent = 
    `
    Easy & direct reservation functionality. Connect with your 
    profile in a straightforward manner using existing services.
    
    `;

    booking_right.appendChild(booking_h3);
    booking_right.appendChild(booking_para);
    booking_right.appendChild(button('View More', 'btn btn-danger'));

    booking.appendChild(booking_right);

    //Call To Action
    const cta = document.createElement('section');
    cta.setAttribute('class', 'cta');

    const cta_cont = document.createElement('div');
    cta_cont.setAttribute('class', 'cta-cont');

    cta.appendChild(cta_cont);

    const cta_left = document.createElement('div');
    cta_left.setAttribute('class', 'cta-left');

    cta_cont.appendChild(cta_left);

    const cta_h2 = document.createElement('h2');
    const cta_para = document.createElement('p');

    cta_h2.textContent = "Want to see our work?";
    cta_para.textContent = 
    `
    We're especially proud of these selections.
    
    `;

    cta_left.appendChild(cta_h2);
    cta_left.appendChild(cta_para);

    const cta_right = document.createElement('div');
    cta_right.setAttribute('class', 'cta-right');

    cta_right.appendChild(button('Take a look', 'btn btn-dark'));

    cta_cont.appendChild(cta_right);

    
    //Footer
    const footer = document.createElement('footer');
    const footer_para = document.createElement('p');

    footer_para.textContent = "Copyright ©2023 All rights reserved | Pizza Restaurant";

    footer.appendChild(footer_para);


    //Append content
    content.appendChild(intro);
    content.appendChild(about);
    content.appendChild(booking);
    content.appendChild(cta);
    content.appendChild(footer);

    return content;
    
}

function button(txt, btnType) {

    const button = document.createElement('button');
    button.setAttribute('class', btnType);
    button.innerHTML = txt;

    return button;

}