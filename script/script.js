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
        console.log(res.data);

        for (let i = 0; i < 6; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<img src="img/pin.svg" alt="pin" class="pin">
            <figure>
            <img src=${res.data[i].url} alt="foto-prova" class="foto bordo">
            <figcaption>${res.data[i].title}</figcaption>
            </figure>`
            container.appendChild(card);
        }

    })
