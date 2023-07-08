"use strict";
const idElement = document.getElementById('advice-id');
const adviceTextElement = document.getElementById('text-section__advice');
const fetchPetition = () => {
    const timestamp = new Date().getTime();
    const url = `https://api.adviceslip.com/advice?timestamp=${timestamp}`;
    fetch(url).then(res=>res.json()).then(data=>{
    idElement.textContent = data.slip.id;
    adviceTextElement.textContent =`"${data.slip.advice}"` ;
    }).catch(()=>{
        idElement.textContent = "...";
        adviceTextElement.textContent = "Sorry... Error :("
    });
};

document.getElementById("advice-article__button-section").addEventListener('click',()=>{
    idElement.textContent = "...";
    adviceTextElement.textContent = "Loading...";
    setTimeout(()=>fetchPetition(),100);
});
fetchPetition();