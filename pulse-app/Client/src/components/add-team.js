import React from 'react';
import './add-team.css';
import cancelIcon from './noun_cancel_405808.svg'
import teamList from './teamList';


export default class AddTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            checked: false
        }
        this.handleCheck=this.handleCheck.bind(this);
    }


    onSubmit(event) {
        event.preventDefault();
        var checked = document.querySelectorAll('.input:checked'); 
        var selectedTeams = Array.from(checked).map(function(team){
            return team.value
        });

        console.log('checked', selectedTeams)

        if(this.props.savedTeams.team.length === 0) { 
            this.props.onAdd(selectedTeams); 
        } else { this.props.onUpdate(selectedTeams); }
    }

    
    setEditing(editing) {
        this.setState({
            editing,
        });
    }

    handleCheck(){
        this.setState({checked: !this.state.checked});
    }


    render() {

        
        if (!this.state.editing) {
            return (
                <div className="add-button"
                    onClick={() => this.setEditing(true)}>
                    <a href="#">Add teams</a>
                </div>
            );
        }
       let savedTeams = this.props.savedTeams.team;
       console.log(savedTeams);
       let nbaTeams =  teamList.NBA.map((team, index) => {
            return(
            <div className="form-check" key={index}>
                <label className="form-check-label">
                    <input type="checkbox" 
                           value = {team}
                           className="form-check-input input"
                           onChange={this.handleCheck}
                           defaultChecked={savedTeams.includes(team) ? true : false}
                />
                    {team}
                </label>
        </div>
        )})

        let mlbTeams =  teamList.MLB.map((team, index) => {
            return(
            <div className="form-check" key={index}>
                <label className="form-check-label">
                    <input type="checkbox" value = {team}
                        className="form-check-input input"
                        onChange={this.handleCheck}
                        defaultChecked={savedTeams.includes(team) ? true : false}
                />
                    {team}
                </label>
        </div>
        )})

        let nflTeams =  teamList.NFL.map((team, index) => {
            return(
            <div className="form-check" key={index}>
                <label className="form-check-label">
                    <input type="checkbox" value = {team}
                        className="form-check-input input"
                        onChange={this.handleCheck}
                        defaultChecked={savedTeams.includes(team) ? true : false}
                />
                    {team}
                </label>
        </div>
        )})

        let nhlTeams =  teamList.NHL.map((team, index) => {
            return(
            <div className="form-check" key={index}>
                <label className="form-check-label">
                    <input type="checkbox" value = {team}
                        className="form-check-input input"
                        onChange={this.handleCheck}
                        defaultChecked={savedTeams.includes(team) ? true : false}
                />
                    {team}
                </label>
        </div>
        )})



        
return (

<div className="container">
<button type="button" id = "cancel" onClick={() => this.setEditing(false)}>
<img src ={cancelIcon}></img>
</button>

<form onSubmit={(e) => this.onSubmit(e)}>
<div id = "leagues">
<div id = "nba" className = "league">
<h2>NBA</h2>
<hr />
  {nbaTeams}
</div>


<div id = "mlb" className = "league">
<h2>MLB</h2>
<hr />
  {mlbTeams}
</div>



<div id = "nfl" className = "league">
<h2>NFL</h2>
<hr />
  {nflTeams}
</div>

<div id = "nhl" className = "league">
<h2>NHL</h2>
<hr />
  {nhlTeams}
</div>

</div>



  <div className="form-group submitButton" >
    <button className="btn btn-primary" >
      Submit
    </button>

  </div>

</form>
</div>
);
}
}


