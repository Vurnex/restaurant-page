export default function nav() {

    //Bootstrap example
    const navBar = document.createElement('nav');
    navBar.setAttribute('class', 'navbar navbar-expand-lg bg-light');

    const container = 
    `
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Pizzaria</a>
    </div>
    
    `
    navBar.innerHTML = container;

    return navBar;
}