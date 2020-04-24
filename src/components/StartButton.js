import React from 'react'

import { Button, SnackBar } from '@material-ui/core';

import startAudioCapturing from '../services/AudioProcessor'

class StartButton extends React.Component {

    constructor(props) {
        super(props);
        this.startButtonClicked = this.startButtonClicked.bind(this);
    }

    render () {
        return <div><Button variant="contained" onClick={this.startButtonClicked}>Start Recording</Button>
        </div>
    }

    startButtonClicked() {
        startAudioCapturing(failedRecording);
        this.props.onNoteChanged(440);
    }
}


function failedRecording() {
    console.log("Failed");
}


export default StartButton;