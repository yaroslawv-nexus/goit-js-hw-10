import {fetchBreeds, fetchCatByBreed} from "./js/cat-api.js";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    catSelect: document.querySelector(`.breed-select`),
    textLoader: document.querySelector(`.loader`),
    catInfo: document.querySelector(`.cat-info`),
}



startLoad();
refs.catSelect.addEventListener(`change`, getSelectCat);


function startLoad() {
    showSpinner();
    fetchBreeds().then(renderListCat).catch(handError);
}

function getSelectCat(e) {
    refs.catInfo.innerHTML = ``;
    showSpinner();
    const idSelectCat = e.currentTarget.value;
    fetchCatByBreed(idSelectCat).then(renderCat).catch(handError);
    
}


function renderListCat(data) {
        hideSpinner();
        refs.catSelect.innerHTML = getMarkBreeds(data);
        refs.catSelect.hidden = false;   
}

function renderCat(data) {
        refs.catInfo.innerHTML = getMarkCat(data);
        hideSpinner();
}

function getMarkCat(data) {
    const catImg = data.url;
    const cat = data.breeds[0];
    return `<div class="flex-item"><img src="${catImg}" width=500 class = "cat-img"></img></div>
    <div class="flex-item"><h1 class = "cat-title">${cat.name}</h1>
    <p>${cat.description}</p>
    <p><b>Temperament:</b> ${cat.temperament}</p></div>`;}
   

function getMarkBreeds(data) {
   return data.map(cat => {
    return `<option value="${cat.id}">${cat.name}</option>`
   }).join(``);
}

function handError(error) {
    Notify.failure("На жаль, сталася помилка");
    console.log(error);
    hideSpinner();
}


function showSpinner() {
    refs.textLoader.hidden = false;
}

function hideSpinner() {
    refs.textLoader.hidden = true;
}






