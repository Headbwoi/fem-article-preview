const open = document.querySelector('#open')
const close = document.querySelector('#close');
const iconbox = document.querySelector('#share-box');

open.addEventListener('click', () => {
    iconbox.classList.toggle('active')
    open.classList.toggle('active')
})
close.addEventListener('click', () => {
    iconbox.classList.toggle('active')
});