var menuModal = document.getElementById('menu-modal');
var menuClose = document.getElementById('menu-close');
var nav = document.querySelector('.nav');

menuModal.addEventListener('click', function() {
    nav.style.marginLeft = 0;
})
menuClose.addEventListener('click', function() {
    nav.style.marginLeft = '-250px';
})