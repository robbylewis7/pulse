import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Teams from './teams';
import AddTeam from './add-team';
import './main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: []
        };
    }

    addTeam(team) {
        this.setState({
            teams: [...this.state.teams, {team}]
        });
        console.log('Teams',team)
         fetch('http://localhost:8080/teams',{
            method: "POST",
            body: JSON.stringify({
                team: team,
                user: "james"
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
            if (!res.ok) { return Promise.reject(res.statusText); }
            return res.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    }


    deleteTeam(team) {
        this.setState({
            teams: [...this.state.teams, {team}]
        });
        console.log('Teams',team)
         fetch('http://localhost:8080/teams/james',{
            method: "DELETE",
            // body: JSON.stringify({
            //     team: team,
            //     user: "james"
            // }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
            if (!res.ok) { return Promise.reject(res.statusText); }
            return res.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    // componentDidMount(){
    //     fetch('http://localhost:8080/teams')
    //     .then(res => {
    //         if (!res.ok) { return Promise.reject(res.statusText); }
    //         return res.json()
    //     })
    //     .then(data => {
    //         this.setState({
    //             teams: data.teams
    //         })
    //         console.log(data);
    //     })
    //     .then(error => {
    //         console.log(error);
    //     })
    //     ;
    // }

    render() {
        const teams = this.state.teams.map((team, index) => (
            <li className="teams" key={index}>
                <Teams {...team} />
            </li>
        ));

        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <ul className="lists">
                    {teams}
                    <li className="addTeams">
                        <AddTeam
                            type="team"
                            onAdd={team => this.addTeam(team)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

Teams.defaultProps = {
    title: 'Pulse'
};
