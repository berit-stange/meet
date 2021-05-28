import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        // this.backgroundColor = null;
        // this.width = null;
        // this.height = null;
        // this.borderRadius = null;
        // this.position = null;
        // this.top = null;
        // this.left = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            // backgroundColor: this.backgroundColor,
            // width: this.width,
            // height: this.height,
            // borderRadius: this.borderRadius,
            // position: this.position,
            // top: this.top,
            // left: this.left,
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()} >{this.props.text}</p>
            </div>
        );
    }
}


class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'var(--dark-color)';
        // this.backgroundColor = 'var(--light-color)';
        // this.width = '12rem';
        // this.height = '12rem';
        // this.borderRadius = '50%';
        // this.position = 'fixed';
        // this.top = '10%';
        // this.left = '65%';
    }
}


class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'var(--accent-color)';
    }
}
export { InfoAlert, ErrorAlert };