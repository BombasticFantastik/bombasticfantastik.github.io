async function LoadPieceOfPage(url){
    const contentArea = document.getElementById('gallery_content_area') 
    const response = await fetch(url)
    const html=await response.text()

    contentArea.innerHTML=html
    //reinit()
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

function OpenDrawning(name){
    window.open(name,'_blank')
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function StackRandomFiles(image_names){
    i=0
    shuffle(image_names)
    image_names.forEach(img => {
        
        const image_zone=document.getElementById('img'+i)
        if(i%2==0){
            image_zone.style.transform=`translate(${GetRandomNumHorizontal(true)}px, ${GetRandomNumVertical()}px)`;
        }
        else{
            image_zone.style.transform=`translate(${GetRandomNumHorizontal()}px, ${GetRandomNumVertical()}px)`;
        }
        image_zone.addEventListener('click',()=>{
            OpenDrawning(image_zone.src)
        })
        image_zone.src='gallery_images/' +img+'.jpg' ;
        i+=1

    });
}

const main_content=document.getElementById('content-area') 
image_names=['chio&osaka_jump','kagura&sakaki_jump','tomo&yomi_jump', 'zamn_bikinki','osaka_scream1','k-on_blackgirl1','mio2','mugi1','eng_with_k-on1']

main_content.addEventListener('click',async (event)=>{
    const gallery_button=event.target.closest('.gallery_button')
    if (gallery_button){
        
        
        await LoadPieceOfPage('gallery.html')
        StackRandomFiles(image_names)

        //скрытие кнопки
        const gallery_button_zone=document.getElementById('gallery_button_zone')
        gallery_button_zone.style.display='none'
        init()
    }

})
