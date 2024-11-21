"use strict";
//  VARIABILI PER API
const baseUrl = 'https://jsonplaceholder.typicode.com';
const postUrl = '/photos';
const params = '?_limit=6'
const endPoint = baseUrl + postUrl + params;


// VARIABILI PER DOM
const container = document.getElementById('cont');

axios.get(endPoint)
    .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<img src="img/pin.svg" alt="pin" class="pin">
            <figure id="${res.data[i].id}">
            <img src=${res.data[i].url} alt="foto-prova" class="foto">
            <figcaption>${res.data[i].title}</figcaption>
            </figure>`
            container.appendChild(card);
        }
        getFigures();
    })
    .catch((error) => {
        console.log(error);

    })

function getFigures() {
    const cards = document.querySelectorAll("figure");
    // console.log(cards);
    cards.forEach(card => {
        // console.log(card);
        card.addEventListener('click', () => {
            const overlay = document.getElementById('overlay');
            const imgSelected = card.querySelector('img');
            const captionSelected = card.querySelector('figcaption');
            const imgOver = overlay.querySelector('img');
            const closeButton = overlay.querySelector('button');
            const overcaption = overlay.querySelector('p');
            overlay.classList.remove('d-none');
            closeButton.addEventListener('click', () => overlay.classList.add('d-none'));
            imgOver.src = imgSelected.src;
            overcaption.innerHTML = captionSelected.innerHTML


        })

    });

}

