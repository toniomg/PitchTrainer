import React from 'react'


class Result extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return <div className='message-box'>
            Note: {this.props.recognizedNote}
        </div>
    }
}


export default Result;