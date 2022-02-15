let menuToggle = document.querySelector('.menu_content');
let burgerMenu = document.querySelector('.burger_menu');

menuToggle.classList.add('hide');

menuToggle.addEventListener('click', showHide);

function showHide() {
    e.preventDefault();
    this.classList.toggle('hide');
    burgerMenu.classList.toggle('hide')
}