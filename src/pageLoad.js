export default function pageLoad() {

    //console.log('I get called from pageLoad.js!');

    const content = document.createElement('section');
    content.setAttribute('class', 'header');

    const header = document.createElement('h1');
    header.innerHTML = "Test header";

    content.appendChild(header);

    return content;

}