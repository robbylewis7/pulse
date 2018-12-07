import React from 'react';
import './add-team.css';



export default class AddTeam extends React.Component {
    constructor(props) {
        super(props);
    }


    onSubmit(event) {
        event.preventDefault();
        var checked = document.querySelectorAll('.input:checked'); 
        var selectedTeams = Array.from(checked).map(function(team){
            return team.value
        });

        console.log('checked', selectedTeams)

        if (selectedTeams && this.props.onAdd) {
            this.props.onAdd(selectedTeams);
        }
    }

    
    // setEditing(editing) {
    //     this.setState({
    //         editing
    //     });
    // }

    

    render() {

    
        
        if (!this.props.editing) {
            return (
                <div className="add-button"
                    onClick={() => this.props.onEdit(true)}>
                    <a href="#">Add your favorite teams</a>
                </div>
            );
        }


        
return (

<div className="container">
<button type="button" className = "cancel" onClick={() => this.setEditing(false)}>
    
</button>

<form onSubmit={(e) => this.onSubmit(e)}>
<div id = "leagues">
<div id = "nba" className = "league">
<h2>NBA</h2>
<hr />
  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Hawks"
        className="form-check-input input"
      />
      Hawks
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Celtics"
        className="form-check-input input"
      />
      Celtics
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Nets"
        className="form-check-input input"
      />
      Nets
    </label>
  </div>

    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Hornets"
        className="form-check-input input"
      />
      Hornets
    </label>
  </div>

  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Bulls"
        className="form-check-input input"
      />
      Bulls
    </label>
  </div>

    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Cavs"
        className="form-check-input input"
      />
      Cavs
    </label>
  </div>

  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Mavs"
        className="form-check-input input"
      />
      Mavs
    </label>
  </div>

    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Nuggets"
        className="form-check-input input"
      />
      Nuggets
    </label>
  </div>


<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Pistons"
        className="form-check-input input"
      />
      Pistons
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Warriors"
        className="form-check-input input"
      />
      Warriors
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Rockets"
        className="form-check-input input"
      />
      Rockets
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Pacers"
        className="form-check-input input"
      />
      Pacers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Clippers"
        className="form-check-input input"
      />
      Clippers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Lakers"
        className="form-check-input input"
      />
      Lakers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Grizzlies"
        className="form-check-input input"
      />
      Grizzlies
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Heat"
        className="form-check-input input"
      />
      Heat
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Bucks"
        className="form-check-input input"
      />
      Bucks
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Timberwolves"
        className="form-check-input input"
      />
      Timberwolves
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Pelicans"
        className="form-check-input input"
      />
      Pelicans
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Knicks"
        className="form-check-input input"
      />
      Knicks
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Thunder"
        className="form-check-input input"
      />
      Thunder
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Magic"
        className="form-check-input input"
      />
      Magic
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "76ers"
        className="form-check-input input"
      />
      76ers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Suns"
        className="form-check-input input"
      />
      Suns
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Trail Blazers"
        className="form-check-input input"
      />
      Trail Blazers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Kings"
        className="form-check-input input"
      />
      Kings
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Spurs"
        className="form-check-input input"
      />
      Spurs
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Raptors"
        className="form-check-input input"
      />
      Raptors
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Jazz"
        className="form-check-input input"
      />
      Jazz
    </label>
</div>

</div>


<div id = "mlb" className = "league">
<h2>MLB</h2>
<hr />
  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "White Sox"
        className="form-check-input input"
      />
      White Sox
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Indians"
        className="form-check-input input"
      />
      Indians
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Tigers"
        className="form-check-input input"
      />
      Tigers
    </label>
  </div>

    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Royals"
        className="form-check-input input"
      />
      Royals
    </label>
  </div>

  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Twins"
        className="form-check-input input"
      />
      Twins
    </label>
  </div>

    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Orioles"
        className="form-check-input input"
      />
      Orioles
    </label>
  </div>

  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Red Sox"
        className="form-check-input input"
      />
      Red Sox
    </label>
  </div>

    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Yankees"
        className="form-check-input input"
      />
      Yankees
    </label>
  </div>


<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Rays"
        className="form-check-input input"
      />
      Rays
    </label>
    </div>

    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Blue Jays"
        className="form-check-input input"
      />
      Blue Jays
    </label>
    </div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Astros"
        className="form-check-input input"
      />
      Astros
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Angels"
        className="form-check-input input"
      />
      Angels
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Athletics"
        className="form-check-input input"
      />
      Athletics
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Mariners"
        className="form-check-input input"
      />
      Mariners
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Rangers"
        className="form-check-input input"
      />
      Rangers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Cubs"
        className="form-check-input input"
      />
      Cubs
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Reds"
        className="form-check-input input"
      />
      Reds
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Brewers"
        className="form-check-input input"
      />
      Brewers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Pirates"
        className="form-check-input input"
      />
      Pirates
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "St. Louis Cardinals"
        className="form-check-input input"
      />
      Cardinals
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Braves"
        className="form-check-input input"
      />
      Braves
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Marlins"
        className="form-check-input input"
      />
      Marlins
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Mets"
        className="form-check-input input"
      />
      Mets
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Phillies"
        className="form-check-input input"
      />
      Phillies
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Nationals"
        className="form-check-input input"
      />
      Nationals
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Diamondbacks"
        className="form-check-input input"
      />
      Diamondbacks
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Rockies"
        className="form-check-input input"
      />
      Rockies
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Dodgers"
        className="form-check-input input"
      />
      Dodgers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Padres"
        className="form-check-input input"
      />
      Padres
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Giants"
        className="form-check-input input"
      />
      Giants
    </label>
</div>

</div>



<div id = "nfl" className = "league">
<h2>NFL</h2>
<hr />
  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Arizona Cardinals"
        className="form-check-input input"
      />
      Cardinals
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Falcons"
        className="form-check-input input"
      />
      Falcons
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Ravens"
        className="form-check-input input"
      />
      Ravens
    </label>
  </div>

    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Bills"
        className="form-check-input input"
      />
      Bills
    </label>
  </div>

  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Carolina Panthers"
        className="form-check-input input"
      />
      Panthers
    </label>
  </div>

    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Bears"
        className="form-check-input input"
      />
      Bears
    </label>
  </div>

  <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Bengals"
        className="form-check-input input"
      />
      Bengals
    </label>
  </div>

    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Browns"
        className="form-check-input input"
      />
      Browns
    </label>
  </div>


<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Cowboys"
        className="form-check-input input"
      />
      Cowboys
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Broncos"
        className="form-check-input input"
      />
      Broncos
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Lions"
        className="form-check-input input"
      />
      Lions
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Packers"
        className="form-check-input input"
      />
      Packers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Texans"
        className="form-check-input input"
      />
      Texans
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Colts"
        className="form-check-input input"
      />
      Colts
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Jaguars"
        className="form-check-input input"
      />
      Jaguars
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Chiefs"
        className="form-check-input input"
      />
      Chiefs
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Chargers"
        className="form-check-input input"
      />
      Chargers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Rams"
        className="form-check-input input"
      />
      Rams
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Dolphins"
        className="form-check-input input"
      />
      Dolphins
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Vikings"
        className="form-check-input input"
      />
      Vikings
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Patriots"
        className="form-check-input input"
      />
      Patriots
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Saints"
        className="form-check-input input"
      />
      Saints
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "New York Giants"
        className="form-check-input input"
      />
      Giants
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Jets"
        className="form-check-input input"
      />
      Jets
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Raiders"
        className="form-check-input input"
      />
      Raiders
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Steelers"
        className="form-check-input input"
      />
      Steelers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "49ers"
        className="form-check-input input"
      />
      49ers
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Seahawks"
        className="form-check-input input"
      />
      Seahawks
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Titans"
        className="form-check-input input"
      />
      Titans
    </label>
</div>

<div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" value = "Redskins"
        className="form-check-input input"
      />
      Redskins
    </label>
</div>

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


