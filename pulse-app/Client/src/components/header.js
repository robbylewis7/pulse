import React from 'react';
import Pulse from './pulse.png'


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id = "header">
                            <h1 id = "title">Pulse</h1>

                <img src={Pulse} id="logo"></img>
            </div>
        );
    }
}

