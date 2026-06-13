document.addEventListener('click',(event)=>{
  if (event.target.closest('.ew_88x31')){
    song_name.textContent='Secret track 0'
    audio.src='other_files/ElectronicWarfare.mp3'
    PauseSong()//
  }
});

// ew_88x31.onclick = ()=> {
//     song_name.textContent='Secret track 0'
//     audio.src='other_files/ElectronicWarfare.mp3'
//     PauseSong()//

//     if (ew_secret){
//         show_new_secret_window()
//         ew_secret=false
//     }
    
// }


