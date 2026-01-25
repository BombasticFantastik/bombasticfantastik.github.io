

images_numbers=[
 '002',
 '005',
 '008',
 '011',
 '014',
 '017',
 '020',
 '023',
 '026',
 '029',
 '032',
 '035',
 '038',
 '041',
 '044',
 '047',
 '050',
 '053',
 '056',
 '059',
 '062'
]
images_idx=0

function animate_cursor()
{
    document.body.style.cursor=`url(${'cursors/arrow_'+images_numbers[images_idx]+'.png'}), auto`;
    images_idx=(images_idx+1)%images_numbers.length
    console.log('cursors/arrow_'+images_numbers[images_idx]+'.png')
}


setInterval(animate_cursor,100)