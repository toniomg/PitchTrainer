import React from 'react'
import StartButton from "./StartButton";


class GameOptions extends React.Component {
    render () {
        return <div className='message-box'>
            Hello {this.props.name}
            <SelectedNote type={"Lower"}/>
            <SelectedNote type={"Higher"}/>
        </div>
    }
}

function SelectedNote(props) {
    return <h1>Select {props.type} Note</h1>;
}


export default GameOptions;

