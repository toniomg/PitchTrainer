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
        this.noteDisplayer = React.createRef();
    }

    onClick2 = () => {
        this.noteDisplayer.current.changeNote("A4");
    }

    render () {
  return (
    <div className="App">
        <GameOptions />
        <button onClick={this.onClick2}> State change</button>
        <StartButton>Test</StartButton>
        <Result ref={this.noteDisplayer}/>
    </div>
  );}
}

export default App;
