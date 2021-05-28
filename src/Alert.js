import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        // this.backgroundColor = null;
        // this.fontSize = 'var(--font - small)';
        // this.fontStyle = 'var(--font - italic)';
        // this.width = '12rem';
        // this.height = '12rem';
        // this.borderRadius = '50%';
        // this.position = 'fixed';
        // this.top = '10%';
        // this.left = '65%';
    }

    getStyle = () => {
        return {
            color: this.color,
            // backgroundColor: this.backgroundColor,
            // fontSize: this.fontSize,
            // fontStyle: this.fontStyle,
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
    }
}


class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'var(--accent-color)';
    }
}
export { InfoAlert, ErrorAlert };