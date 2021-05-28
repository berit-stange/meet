import React, { Component } from 'react';

class NumberOfEvents extends Component {

    // state = {
    //     numberOfEvents: this.props.numberOfEvents,
    // };

    handleChange = (event) => {
        const inputValue = event.target.value;
        // this.setState({
        //     numberOfEvents: inputValue,
        // });
        this.props.updateEvents('', inputValue);
    };


    render() {
        return <div className="select-number">

            <input
                type="number"
                className="number-input"
                value={this.props.numberOfEvents}
                onChange={this.handleChange}
            />

        </div>
    }
}

export default NumberOfEvents;