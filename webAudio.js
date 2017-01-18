const ScaleNumber = [0,1,2,3,4,5,6];
const Ionian = [2,2,1,2,2,2,1];
const Dorian = [2,1,2,2,2,1,2];
const Phrygian = [1,2,2,2,1,2,2];
const Lydian = [2,2,2,1,2,2,1];
const MixoLydian = [2,2,1,2,2,1,2];
const Aeolian = [2,1,2,2,1,2,2];
const Locrian = [1,2,2,1,2,2,2];
const MasterScale = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

class ScaleGenerator{
    constructor(){
        window.AudioContext = window.AudioContext||window.webkitAudioContext; //互換対応

        // 音のオブジェクト生成
        this.audioContext = new AudioContext();

        let scale = Ionian;
        console.log(scale);
    }
}

class AudioManager{
    constructor(){ 
        window.AudioContext = window.AudioContext||window.webkitAudioContext; //互換対応
        
        // 音のオブジェクト生成
        this.audioContext = new AudioContext();
    }

    init(waveType){

        // 音の発生源生成
        this.oscillatorNode = this.audioContext.createOscillator();
        // 音の出力先
        this.audioDestinationNode = this.audioContext.destination;
        // ゲイン管理
        this.gainNode = this.audioContext.createGain();

        // 音の種類 矩形
        this.oscillatorNode.type = waveType;

        // 音程 A4=880Hz
        const frequency = parseInt(880 * Math.pow(Math.pow(2,1/12), 0), 10);
        this.oscillatorNode.frequency.value = frequency;

        // 音量設定
        this.gainNode.gain.value = 0.01;

        // 音の発生源をgainNodeに接続
        this.oscillatorNode.connect(this.gainNode);

        // gainNodeを出力に接続
        this.gainNode.connect(this.audioDestinationNode);

        // 発音しているかどうかのフラグ管理用プロパティ
        this.isPlay = false;
    }

    play(){
        // 音を鳴らす
        if(this.isPlay === false){
            this.oscillatorNode.start();
            this.isPlay = true;
        }
    }

    stop(){
        if(this.isPlay === true){
            this.oscillatorNode.stop(this.audioContext.currentTime + 0.1);
            this.isPlay = false;
        }
    }
}
