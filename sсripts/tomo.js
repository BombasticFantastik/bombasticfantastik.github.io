const tomoaudio= new(window.AudioContext)
let cnt_of_tomo=3
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

  if (event.target.closest('.tomo_88x31')){
    playTomoAudio()
    cnt_of_tomo-=1
    
    if (cnt_of_tomo==0){
      girlsFlight()
      cnt_of_tomo=3
      console.log(cnt_of_tomo)
    }
  }
});

