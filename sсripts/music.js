//let play= document.getElementById('player')

let audio= new Audio()

audio.src='music/Nautilus_Pompilius_-_Knyaz_tishiny_Naugad_remastering_68595789.mp3'
audio.volume=0.5

function BackSong(){
    
}
function PauseSong(){
    if (audio.paused) {
        audio.play()
    }
    else {
        audio.pause()
    }
}
function NextSong(){
    
}

// function ChangeVolume(){
//     audio.volume=volume_input.value/100
// }
console.log(audio.volume)

window.addEventListener('DOMContentLoaded',()=>{

    let volume_input=document.getElementById('volume_input');
    let back_button=document.getElementById('back_button');
    let pause_button=document.getElementById('pause_button');
    let next_button=document.getElementById('next_button');
    
    volume_input.addEventListener('input',()=>{
        audio.volume=volume_input.value/100
    });

    back_button.onclick = ()=> BackSong();
    pause_button.onclick= ()=> PauseSong();
    next_button.onclick= ()=>NextSong();
    //audio.volume=0.1
    
})

