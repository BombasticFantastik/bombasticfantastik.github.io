

// images_numbers=[
//  '002',
//  '005',
//  '008',
//  '011',
//  '014',
//  '017',
//  '020',
//  '023',
//  '026',
//  '029',
//  '032',
//  '035',
//  '038',
//  '041',
//  '044',
//  '047',
//  '050',
//  '053',
//  '056',
//  '059',
//  '062'
// ]
// images_idx=0

// function animate_cursor()
// {
//     document.body.style.cursor=`url(${'cursors/arrow_'+images_numbers[images_idx]+'.png'}), auto`;
//     images_idx=(images_idx+1)%images_numbers.length
//     console.log('cursors/arrow_'+images_numbers[images_idx]+'.png')
// }


// setInterval(animate_cursor,100)

const cursor = document.getElementById('custom-cursor')
console.log(cursor)
let frame=0
const total_frames=21;

window.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.clientX+'px'
    cursor.style.top=e.clientY+'px'
})

window.addEventListener('mouseover', (e) => {
    if (e.target.matches('h1, h2, h3, p, a')) {
        cursor.className = 'text';
    }
});

window.addEventListener('mouseout', (e) => {
    if (e.target.matches('h1, h2, h3, p, a')) {
        cursor.className = 'default';
    }
});

function animate_cursor()
{
    frame=(frame+1)%total_frames
    const offset=frame*64
    cursor.style.backgroundPosition=`-${offset}px 0px`
    //console.log('cursors/arrow_'+images_numbers[images_idx]+'.png')
}

setInterval(animate_cursor,100)

