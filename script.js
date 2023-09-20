
const item = document.querySelectorAll('.item');
const overlay = document.querySelector('.overlay');
const calculator_container = document.querySelector('.calculator_container');
const terra_container = document.querySelector('.terra_container');
const etch_container = document.querySelector('.etch_container');
const rps_container = document.querySelector('.rps_container');
const scrabble_container = document.querySelector('.scrabble_container');
const sage_container = document.querySelector('.sage_container');

const section = document.querySelectorAll('section[id]');


// Portfolio PopUps
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

function exitOverlay() {
    overlay.style.display = 'none';
    calculator_container.style.display = 'none';
    terra_container.style.display = 'none';
    etch_container.style.display = 'none';
    rps_container.style.display = 'none';
    scrabble_container.style.display = 'none';
    sage_container.style.display = 'none';
}

// Navigation Scroll

window.addEventListener("scroll", highlightNav);

function highlightNav() {
    let scrollY = window.pageYOffset;
    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navigation a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.navigation a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
