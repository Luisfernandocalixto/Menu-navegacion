let abrir = document.getElementById('open');
let menu = document.getElementById('menu');
let cerrado = true;

abrir.addEventListener('click', apertura);

function apertura() {
    if (cerrado) {
        menu.style.width = '70%';
        cerrado = false;

    }
    else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('resize', res)

function res() {
    if (window.innerWidth > 700) {
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');

    }

}