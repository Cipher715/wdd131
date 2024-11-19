const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('header');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    header.classList.toggle('open');
});