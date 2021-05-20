import React, { Component } from 'react';


class Event extends Component {
    state = {
        showDetails: false
    };

    handleItemClicked = () => {
        this.setState(previousState => ({
            showDetails: !previousState.showDetails
        }));
    }

    // handleItemHide = (showDetails) => {
    //     this.setState({
    //         showDetails: false
    //     });
    // };

    render() {
        const { event } = this.props;
        const { showDetails } = this.state;

        return (
            <div className="event">
                <div className="event-short">
                    <h3 className="summary">{event.summary}</h3>
                    <p className="start-time">{event.start.dateTime}</p>
                    <p className="location">{event.location}</p>
                </div>

                {showDetails ? (
                    <div className="event-details">
                        <div className="description">{event.description}</div>

                        <button
                            id="btn-hide-details"
                            className="btn-hide-details"
                            onClick={this.handleItemClicked}
                        // onClick={() => this.handleItemClicked()}
                        >Hide Details
                        </button>

                    </div>
                ) : (
                    <button
                        className="btn-details"
                        onClick={this.handleItemClicked}
                    // onClick={() => this.handleItemClicked()}
                    >Show Details
                    </button>
                )}
            </div>
        );
    };
}

export default Event;