import join from 'lodash/join';

import './styles.css';

import imageFile from './images/paisagem.jpg'

function component() {
    var element = document.createElement('div');

    // Lodash é utilizado como variável global por meio da declaração do 
    // <script> no index.html
    element.classList.add('title');
    element.innerHTML = join(['Olá', 'webpack', '!'], ' ');

    const image = new Image()
    image.src = imageFile;
    image.style.width = '200px'

    element.appendChild(image)

    return element;
}

document.body.appendChild(component());
