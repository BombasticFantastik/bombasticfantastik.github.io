function LoadPieceOfPage(url){
    const contentArea = document.getElementById('gallery_content_area') 
    fetch(url)
        .then(response => response.text())
        .then(html=>{
            contentArea.innerHTML=html
            reinit()
        });
}
const main_content=document.getElementById('content-area') 

main_content.addEventListener('click',(event)=>{
    const gallery_button=event.target.closest('.gallery_button')
    if (gallery_button){
        //console.log('sad')
        LoadPieceOfPage('gallery.html')
    }

})
