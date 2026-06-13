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

document.addEventListener('click',(event)=>{
  console.log(event.target.classList)
  if (event.target.closest('.tomo_88x31')){
    playTomoAudio()
  }
});

