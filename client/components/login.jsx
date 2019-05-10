import React, { Component } from "react";
//import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      [event.target.id]: event.target.value
    });

  }

  handleSubmit(event) {
    console.log('submit clicked')
    let path = '/';
    window.location = path;
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form>
          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" id="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
            <br></br>
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" id="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
            <br></br>
            <button className="loginButton" onClick={this.handleSubmit}>Login</button>
            <br></br>
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>

          <div className="container" >
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
    );
  }
}