export default function tabs() {

    const tabs = document.createElement('div');
    tabs.setAttribute('class', 'tab-cont');

    const items = 
    `
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation" id="tab1">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
        </li>
        <li class="nav-item" role="presentation" id="tab2">
            <button class="nav-link" id="menu-tab" data-bs-toggle="tab" data-bs-target="#menu" type="button" role="tab" aria-controls="menu" aria-selected="false">Menu</button>
        </li>
        <li class="nav-item" role="presentation" id="tab3">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
        </li>
    </ul>

    `
    tabs.innerHTML = items;

    return tabs;
}