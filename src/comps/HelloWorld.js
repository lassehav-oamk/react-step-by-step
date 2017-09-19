import React, { Component } from 'react';

export default class HelloWorld extends Component {
    render () {
        return (
            <div>
                <div>
                Hello World
                </div>
                <button onClick={this.props.buttonClickHandler}>Nappi</button>
            </div>
        );
    }
}