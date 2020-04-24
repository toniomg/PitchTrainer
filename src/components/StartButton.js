import React from 'react'

import { Button, SnackBar } from '@material-ui/core';

import startAudioCapturing from '../services/AudioProcessor'

class StartButton extends React.Component {
    render () {
        return <div><Button variant="contained" onClick={startButtonClicked}>Start Recording</Button>
        </div>
    }
}

function failedRecording() {
    console.log("Failed");
}

function startButtonClicked() {
    // startAudioCapturing(failedRecording);
}

export default StartButton;