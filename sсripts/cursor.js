const cursor = document.getElementById('custom-cursor');
let frame = 0;
const total_frames = 21;




window.addEventListener('mousemove', (e) => {

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});



window.addEventListener('mouseover', (e) => {
    if (e.target.matches('h1, h2, h3, p, a')) {
        cursor.className='text';
    } else if (e.target.matches('button')) {
        cursor.className='button';
    }
    
});


window.addEventListener('mouseout', (e) => {
    if (e.target.matches('h1, h2, h3, p, a, button','div')) {
        cursor.className = 'default'; 
    }
});

function animate_cursor() {
    frame = (frame + 1) % total_frames;
    const offset = frame * 64;
    cursor.style.backgroundPosition = `-${offset}px 0px`;
}

setInterval(animate_cursor, 125);