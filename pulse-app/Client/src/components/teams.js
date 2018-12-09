import React from 'react';


export default class Teams extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let teamString = this.props.team.toString();
        console.log(this.props.team.length)
        let teams = teamString.split(',');
            for (var t in teams) {
            var newElement = document.createElement('div');
            newElement.id = teams[t]; newElement.className = "teams";
            newElement.innerHTML = teams[t];
            document.body.appendChild(newElement);
}
        return (
            <div>
            </div>
        );
    }
}

Teams.defaultProps = {
    team: ''
};