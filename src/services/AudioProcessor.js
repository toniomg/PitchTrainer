import teoria from "teoria";

const Pitchfinder = require("pitchfinder");

const detectPitch = Pitchfinder.DynamicWavelet();

const audioContext = new AudioContext();

export default function startAudioCapturing(error) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia ({audio: true})

            .then(function(stream) {
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start(100);

                let chunks = [];
                mediaRecorder.ondataavailable = function(e) {
                    chunks.push(e.data);
                }

                //As an example, record time for 2 seconds.
                setTimeout(function(){
                    mediaRecorder.stop();
                    const blob = new Blob(chunks);
                    convertToArrayBuffer(blob)
                        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
                        .then(findPitch);

                }, 2000);
            })

            .catch(function(err) {
                console.log('The following getUserMedia error occured: ' + err);
                error();
                }
            );
    } else {
        console.log('getUserMedia not supported on your browser!');
        error();
    }
}

function convertToArrayBuffer(blob) {
    const url = URL.createObjectURL(blob);

    return fetch(url).then(response => {
        return response.arrayBuffer();
    });
}

function findPitch(audioBuffer) {
    const float32Array = audioBuffer.getChannelData(0);
    const pitch = detectPitch(float32Array);
    console.log(pitch);
}


function convertPitchToNote(pitch) {
    const note = teoria.note.fromFrequency(pitch).note;
    console.log(note.name() + note.accidental() + note.octave())
}
