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
        const checked = this.textInput.value;
        if (checked && this.props.onAdd) {
            this.props.onAdd(checked);
        }
        this.textInput.value = '';
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
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
                    <label className="form-check-label">
                        <input type="checkbox" className = "input" value = "Lakers"/>
                        Lakers
                        </label>
          <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}
