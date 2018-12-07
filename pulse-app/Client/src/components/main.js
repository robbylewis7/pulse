import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Teams from './teams';
import AddTeam from './add-team';
import './main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            editing: false
        };
    }

    setEditing(editing) {
        this.setState({
            editing
        });
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

    componentDidMount(){
        fetch('http://localhost:8080/teams')
        .then(res => {
            if (!res.ok) { return Promise.reject(res.statusText); }
            return res.json()
        })
        .then(data => {
            this.setState({
                teams: data.teams
            })
            console.log(data);
        })
        .then(error => {
            console.log(error);
        })
        ;
    }

    render() {
        const teams = this.state.teams.map((team, index) => (
            <li className="teams" key={index}>
                <Teams {...team} />
            </li>
        ));

        return (
            <div className="board">
                <ul className="lists">
                    <li className="addTeams">
                        <AddTeam
                            onAdd={team => this.addTeam(team)}
                            onEdit={editing => this.setEditing(editing)}
                        />
                    </li>
                    {teams}
                </ul>
            </div>
        );
    }
}


