export default function footer() {

    const footer = document.createElement('footer');
    const footer_para = document.createElement('p');

    footer_para.textContent = "Copyright ©2023 All rights reserved | Pizza Restaurant";

    footer.appendChild(footer_para);

    return footer;
}