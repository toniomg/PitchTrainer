import React from 'react'

import { Button, SnackBar } from '@material-ui/core';

import startAudioCapturing from '../services/AudioProcessor'

class StartButton extends React.Component {

    constructor(props) {
        super(props);
        this.startButtonClicked = this.startButtonClicked.bind(this);
        this.recordingFinished = this.recordingFinished.bind(this);
    }

    render () {
        return <div><Button variant="contained" onClick={this.startButtonClicked}>Start Recording</Button>
        </div>
    }

    startButtonClicked() {
        startAudioCapturing(failedRecording, this.recordingFinished);

    }

    recordingFinished(pitchDetected) {
        console.log("Finished " + pitchDetected);
        this.props.onNoteChanged(pitchDetected)
    }
}


function failedRecording() {
    console.log("Failed");
}


export default StartButton;