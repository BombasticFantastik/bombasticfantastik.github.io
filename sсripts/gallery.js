async function LoadPieceOfPage(url){
    const contentArea = document.getElementById('gallery_content_area') 
    const response = await fetch(url)
    const html=await response.text()

    contentArea.innerHTML=html
    reinit()
}
function GetRandomNumHorizontal(){
    return Math.random()*1000
}

const main_content=document.getElementById('content-area') 


main_content.addEventListener('click',async (event)=>{
    const gallery_button=event.target.closest('.gallery_button')
    if (gallery_button){
        
        await LoadPieceOfPage('gallery.html')

        //отрисовка изображений
        const zamn_bikini=document.getElementById('zamn_bikini_drawing')
        zamn_bikini.style.marginLeft=GetRandomNumHorizontal()+'px'

    }

})
