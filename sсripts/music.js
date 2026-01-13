let play= document.getElementById('player')
const audio= new Audio

audio.volume=.5
audio.src='music/Nautilus_Pompilius_-_Knyaz_tishiny_Naugad_remastering_68595789.mp3'

function BackSong(){
    
}
function PauseSong(){
    if (player.paused) {
        player.play()
    }
    else {
        player.pause()
    }
}
function NextSong(){
    
}

window.addEventListener('DOMContentLoaded',()=>{
    
    let back_button=document.getElementById('back_button');
    let pause_button=document.getElementById('pause_button');
    let next_button=document.getElementById('next_button');
    
    back_button.onclick = ()=> BackSong();
    pause_button.onclick= ()=> PauseSong();
    next_button.onclick= ()=>NextSong();
    
})
