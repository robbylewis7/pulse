import React from 'react';
import './add-team.css';



export default class AddTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }




    onSubmit(event) {
        event.preventDefault();
        const checked = document.querySelector('.input:checked').value;
        if (checked && this.props.onAdd) {
            this.props.onAdd(checked);
        }
        document.querySelector('.input:checked').value = '';
    }



    setEditing(editing) {
        this.setState({
            editing
        });
    }

    

    render() {


    var teams = []; 
    var inputs = document.querySelectorAll('input'); 
        inputs.forEach(function(item) { 
        item.addEventListener('change', function(e) {
        console.log(e.target.value, this.checked) 
            if(this.checked) { 
            teams.push(e.target.value);
            } else {
            teams.splice( teams.indexOf(e.target.value), 1 ); 
        }
        console.log(teams); 
      })
    })
    
    var form = document.querySelector('.checkbox-form');
    if(form){
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log(teams)
    })}

        
        if (!this.state.editing) {
            return (
                <div className="add-button"
                    onClick={() => this.setEditing(true)}>
                    <a href="#">Add your favorite teams</a>
                </div>
            );
        }


        
return (
            
<div className="container">
<h2>NBA</h2>
<hr />
<form onSubmit={(e) => this.onSubmit(e)}>
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
  <div className="form-group">
    <button className="btn btn-primary">
      Submit
    </button>
    <button type="button" className = "btn btn-primary" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
  </div>
</form>
</div>
);
}
}


