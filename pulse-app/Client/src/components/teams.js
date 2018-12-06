import React from 'react';


export default class Teams extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.team}</h3>
            </div>
        );
    }
}

Teams.defaultProps = {
    team: ''
};