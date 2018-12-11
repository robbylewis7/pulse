import React from 'react';


export default class Teams extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let teamString = this.props.team.toString();
        console.log(this.props.team)
        
        let test = this.props.team;
        console.log(test);
        let test2 = test.map((team, index) => {
           return <li key={index} className={"teams"}>{team} </li>
                             
        });
        console.log(test2);
        

        return (
            <>
                {test2}
            </>
        );
    }
}

Teams.defaultProps = {
    team: ''
};