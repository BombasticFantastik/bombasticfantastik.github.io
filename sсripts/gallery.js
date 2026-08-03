async function LoadPieceOfPage(url){
    const contentArea = document.getElementById('gallery_content_area') 
    const response = await fetch(url)
    const html=await response.text()

    contentArea.innerHTML=html
    reinit()
}
function GetRandomNumHorizontal(left){
    const contentArea = document.getElementById('gallery_content_area') 
    if (left){
        return Math.random()*-150
    }
    else{
        return Math.random()*150
    }
}

function GetRandomNumVertical(){
    const contentArea = document.getElementById('gallery_content_area') 
    return Math.random()*10
}

const main_content=document.getElementById('content-area') 


main_content.addEventListener('click',async (event)=>{
    const gallery_button=event.target.closest('.gallery_button')
    if (gallery_button){
        
        await LoadPieceOfPage('gallery.html')

        //отрисовка изображений
        const zamn_bikini=document.getElementById('zamn_bikini_drawing')
        zamn_bikini.style.transform=`translate(${GetRandomNumHorizontal(true)}px, ${GetRandomNumVertical()}px)`;

        const chio_osaka_jump=document.getElementById('chio&osaka_jump_drawning')
        chio_osaka_jump.style.transform=`translate(${GetRandomNumHorizontal(true)}px, ${GetRandomNumVertical()}px)`;


        const tomo_yomi_jump=document.getElementById('tomo&yomi_drawning')
        tomo_yomi_jump.style.transform=`translate(${GetRandomNumHorizontal()}px, ${GetRandomNumVertical()}px)`;

        const kagura_sakaki_jump=document.getElementById('kagura&sakaki_drawning')
        kagura_sakaki_jump.style.transform=`translate(${GetRandomNumHorizontal()}px, ${GetRandomNumVertical()}px)`;

        const osaka_scream1=document.getElementById('osaka_scream1_drawning')
        osaka_scream1.style.transform=`translate(${GetRandomNumHorizontal(true)}px, ${GetRandomNumVertical()}px)`;
        

    }

})
