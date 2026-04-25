kita_secret=true

const kitaudio= new(window.AudioContext)

let clickBuffer = null;


fetch('other_files/kitaura.mp3')
  .then(response => response.arrayBuffer())
  .then(data => kitaudio.decodeAudioData(data))
  .then(buffer => {
    clickBuffer = buffer;
  });

function playKitaAudio(){
  if (!clickBuffer) return;

  const soundSource = kitaudio.createBufferSource();
  soundSource.buffer = clickBuffer;
  
  soundSource.connect(kitaudio.destination);
  soundSource.start(0);
}

// document.querySelector('kitaura_88x31').addEventListener('click',playKitaAudio)
// document.querySelector('kitaura_88x31').addEventListener('click',playKitaAudio)

let kitaura_88x31=document.getElementById("kitaura_88x31");
kitaura_88x31.onclick = ()=> {
  if (kita_secret){
    show_new_secret_window()
    kita_secret=false
  }
  playKitaAudio()
}

let kitaura_88x312=document.getElementById("kitaura_88x312");
kitaura_88x312.onclick = ()=> {
  if (kita_secret){
    show_new_secret_window()
    kita_secret=false
  }
  playKitaAudio()
  
}