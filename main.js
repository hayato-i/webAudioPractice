window.onload = function(){
    let wave = new AudioManager;
    let ionian = new ScaleGenerator();

    wave.init('square');
    wave.play();
    wave.stop();
}