import React from 'react';
import logo from './logo.svg';
import './App.css';

import teoria from 'teoria';

import StartButton from './components/StartButton.js';
import GameOptions from './components/GameOptions.js';
import Result from './components/Result';

class App  extends React.Component{

    constructor(props) {
        super(props)
        this.state= {recognizedNote: null};
        this.handleNoteChanged = this.handleNoteChanged.bind(this);
    }

    handleNoteChanged(newNote) {
        this.setState({recognizedNote: newNote})
        console.log("Note has changed: " + newNote);
    }


    render () {
        return (
            <div className="App">
                <GameOptions />
                <StartButton onNoteChanged={this.handleNoteChanged}>Test</StartButton>
                <Result recognizedNote={this.state.recognizedNote}/>
            </div>
        );}
}

export default App;
