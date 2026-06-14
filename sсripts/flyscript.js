const girls = document.getElementById('osaka-chio')

function girlsFlight(){
    girls.style.display='block'
    girls.classList.add('fly-active');

    girls.addEventListener('animationend', () => {
        girls.classList.remove('fly-active');
        girls.style.display='none';
    },
    { once: true });
}


