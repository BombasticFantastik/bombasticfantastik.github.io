const girls = document.getElementById('osaka-chio')

function girlsFlight(){
    girls.classList.add('fly-active');

    girls.addEventListener('animationend', () => {
        girls.classList.remove('fly-active');
    }, { once: true });
}


