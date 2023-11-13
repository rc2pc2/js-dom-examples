// ? come aggiungere una classe ad un elemento esistente senza sovrascriverla
const newElement = document.querySelector('h1.d-block');
newElement.className = newElement.className + ' color-red';
