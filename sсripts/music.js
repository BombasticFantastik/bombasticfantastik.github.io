//let play= document.getElementById('player')

let audio= new Audio()
let song_index=0 

const all_songs=['investigation','monkey','scheme']
audio.src='music/investigation.mp3'
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
    if (song_index==all_songs.length-1){
        song_index=0
    }
    else
    {
        song_index+=1
    }
    audio.src='music/'+all_songs[song_index]+'.mp3'
    console.log(song_index)
    audio.play()
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


    // циклический повтор после паузы 2 сек
    audio.addEventListener('ended', function() {
        NextSong()
        //setTimeout(() => audio.play(), 2000);
    });

    
    
})

