ew_secret=true
//первый 88x31
let ew_88x31=document.getElementById("ew_88x31");
//console.log(ew_88x31)

ew_88x31.onclick = ()=> {
    song_name.textContent='Secret track 0'
    audio.src='other_files/ElectronicWarfare.mp3'
    PauseSong()//

    if (ew_secret){
        show_new_secret_window()
        ew_secret=false
    }
    
}

//второй 88x31
let ew_88x312=document.getElementById("ew_88x312");
//console.log(ew_88x312)

ew_88x312.onclick = ()=> {
    song_name.textContent='Secret track 0'
    audio.src='other_files/ElectronicWarfare.mp3'
    PauseSong()
    // let secret_dialog=document.getElementById('secret_dialog')
    // secret_dialog.showModal()
    if (ew_secret){
        show_new_secret_window()
        ew_secret=false
    }
    
}
