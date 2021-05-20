import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        numberEvents: 32
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            numberEvents: value,
            errorText: ''
        });
    }

    render() {
        return <div className="select-number">

            <input
                type="number"
                className="number-input"
                value={this.state.numberEvents}
                onChange={this.handleChange}
            />

        </div>
    }
}

export default NumberOfEvents;