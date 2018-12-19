import React from 'react';
import Pulse from './pulse.png'
import TopInfo from './top-info'
import './signup.css'


export default class Signup extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
              username: '',
              lastName: '',
              firstName: '',
              password: ''
            };
      
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleInputChange(event) {
            this.setState({ 
                [event.target.name]: event.target.value 
            });
          }

          addTeam(username){
            fetch('http://localhost:8080/teams',{
              method: "POST",
              body: JSON.stringify({
                  team: [],
                  user: username
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

          handleSubmit(event) {
            alert('A name was submitted: ' + this.state.username);
            event.preventDefault();
            fetch('http://localhost:8080/api/users',{
              method: "POST",
              body: JSON.stringify({
                  username: this.state.username,
                  lastName: this.state.lastName,
                  firstName: this.state.firstName,
                  password: this.state.password
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
          this.addTeam(this.state.username)
          }
      
        render() {

          return (
            <div>
              <TopInfo />

              <div id = "signup">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    First Name:
                    <input type="text" name = "firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                  </label>
                  <label>
                    Last Name:
                    <input type="text" name = "lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                  </label>
                  <label>
                    Username:
                    <input type="text" name = "username" value={this.state.username} onChange={this.handleInputChange} />
                  </label>
                  <label>
                    Password:
                    <input type="password" name = "password" value={this.state.password} onChange={this.handleInputChange} />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          );
        }
      }
