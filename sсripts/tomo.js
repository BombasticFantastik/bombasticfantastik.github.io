
const tomoaudio= new(window.AudioContext)



fetch('other_files/йей.mp3')
  .then(tomoresponse => tomoresponse.arrayBuffer())
  .then(tomodata => tomoaudio.decodeAudioData(tomodata))
  .then(tomobuffer => {
    tomoclickBuffer = tomobuffer;
  });

function playTomoAudio(){
  if (!tomoclickBuffer) return;

  const soundSource = tomoaudio.createBufferSource();
  soundSource.buffer = tomoclickBuffer;
  
  soundSource.connect(tomoaudio.destination);
  soundSource.start(0);
}

let tomo_88x31=document.getElementById("tomo_88x31");
tomo_88x31.onclick = ()=> {
  playTomoAudio()
}

let tomo_88x312=document.getElementById("tomo_88x312");
tomo_88x312.onclick = ()=> {

  playTomoAudio()
  
}