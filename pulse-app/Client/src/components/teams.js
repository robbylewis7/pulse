import React from 'react';


export default class Teams extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let teamString = this.props.team.toString();
        let teams = teamString.split(',').join("\r\n");
        return (
            <div>
                <h3>{teams}</h3>
            </div>
        );
    }
}



Teams.defaultProps = {
    team: ''
};