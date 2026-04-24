const kitaudio= new(window.AudioContext)

let clickBuffer = null;

fetch('other_files/kitaura.mp3') 
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
  .then(decodedData => {
    clickBuffer = decodedData;
  });