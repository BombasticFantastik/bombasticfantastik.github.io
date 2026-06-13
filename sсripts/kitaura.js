const kitaudio= new(window.AudioContext)

fetch('other_files/kitaura.mp3')
  .then(kitaresponse => kitaresponse.arrayBuffer())
  .then(kitadata => kitaudio.decodeAudioData(kitadata))
  .then(kitabuffer => {
    kitaclickBuffer = kitabuffer;
  });

function playKitaAudio(){
  if (!kitaclickBuffer) return;
  const soundSource = kitaudio.createBufferSource();
  soundSource.buffer = kitaclickBuffer;
  soundSource.connect(kitaudio.destination);
  soundSource.start(0);
}

document.addEventListener('click',(event)=>{
  //console.log(event.target.classList)
  if (event.target.closest('.kita_88x31')){
    playKitaAudio()
  }
});


