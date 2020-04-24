import React from 'react'


class Result extends React.Component {

    constructor(props) {
        super(props)

        this.state = {note: null};
    }

    changeNote = (note)  => {
        this.setState({note: note});
    }

    render () {
        return <div className='message-box'>
            Note: {this.state.note}
        </div>
    }
}


export default Result;