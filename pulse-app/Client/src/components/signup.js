import React from 'react';
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
            console.log('A name was submitted: ' + this.state.username);
            event.preventDefault();
            // window.location = '/login';
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
          })          
          .then(
            this.redirectLogin
          )
          this.addTeam(this.state.username)
          }

          redirectLogin(){
            window.location = '/login'
          }



      
        render() {

          return (
            <div>
              <TopInfo />

              <div id = "signup">
              
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder = "First Name" name = "firstName" value={this.state.firstName} onChange={this.handleInputChange} className = "inputLogin"/>
                    <input type="text" placeholder = "Last Name" name = "lastName" value={this.state.lastName} onChange={this.handleInputChange} className = "inputLogin"/>
                    <input type="text" placeholder = "Username" minLength = "1" name = "username" value={this.state.username} onChange={this.handleInputChange} className = "inputLogin" required />
                    <input type="password" placeholder = "Password" minLength = "8" maxLength = "72" name = "password" value={this.state.password} onChange={this.handleInputChange} className = "inputLogin" required/>
                  <input type="submit" id = "submitButtonLogin" className="loginButton" value="Let's Do It" />
                </form>
              </div>
            </div>
          );
        }
      }
