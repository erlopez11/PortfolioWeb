
const item = document.querySelectorAll('.item');
const overlay = document.querySelector('.overlay');
const calculator_container = document.querySelector('.calculator_container');
const terra_container = document.querySelector('.terra_container');
const etch_container = document.querySelector('.etch_container');
const rps_container = document.querySelector('.rps_container');
const scrabble_container = document.querySelector('.scrabble_container');
const sage_container = document.querySelector('.sage_container');

item.forEach(item => {
    item.addEventListener('click', () => display(item));
})

function display(item) {
    overlay.style.display = 'flex';
    if (item.classList.contains('calculator')) {
        calculator_container.style.display = 'flex';
    } else if (item.classList.contains('terra')) {
        terra_container.style.display = 'flex';
    } else if (item.classList.contains('etch')) {
        etch_container.style.display = 'flex';
    } else if (item.classList.contains('rps_game')) {
        rps_container.style.display = 'flex';
    } else if (item.classList.contains('scrabble')) {
        scrabble_container.style.display = 'flex';
    } else if (item.classList.contains('sage')) {
        sage_container.style.display = 'flex';
    }
}