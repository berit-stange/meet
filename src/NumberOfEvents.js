import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
import './custom-styles.css';

class NumberOfEvents extends Component {

    state = {
        errorText: ''
    };

    handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue < 1 || inputValue > 24) {
            this.setState({
                errorText: 'Try a number between 1 and 24!'
            });
        } else {
            this.setState({
                errorText: ''
            });
            this.props.updateEvents('', inputValue);
        }
    };


    render() {
        return <div className="select-number">
            <div className="error-text" >
                <ErrorAlert text={this.state.errorText} />
            </div>

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