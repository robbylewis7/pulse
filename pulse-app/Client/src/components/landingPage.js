import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingTop from './landing-top'
import Pulse from './pulse.png'


export default class Landing extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <LandingTop />
            </div>
        );
    }
}
