import React, { Component } from "react";
//import "./login.css";
import SignupList from './signuplist.jsx'
import SignupDetails from "./signupDetails.jsx";
import { Container, Button, Alert } from 'react-bootstrap';



export default class Signups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signups: [],
      isAddSignup: false,
      error: null,
      signup: {},
      isEditSignup: false
    }

  }
  editSignup(signup) {
    this.setState({
      isEditSignup: true,
      signup: signup
    });
  }
  onCreate() {
    this.setState({ isAddSignup: true });
  }

  onFormSubmit(data) {
    let method;

    if (this.state.isEditSignup) {
      method = 'PUT';
    } else {
      method = 'POST';
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: method,
      body: JSON.stringify(data),
      headers: myHeaders
    };

    fetch('/data/signups', options)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isAddSignup: false,
          isEditSignup: false
        })
        this.loadSignups();
      },
        (error) => {
          this.setState({ error });
        }
      )
  }



  componentDidMount() {
    this.loadSignups();
  }
  loadSignups() {
    fetch('data/signups', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(results => results.json())
      .then(data => {
        this.setState({
          signups: data
        })
      })
  }



  render() {
    let signupDetails;

    if (this.state.isAddSignup || this.state.isEditSignup) {
      signupDetails = <SignupDetails signup={this.state.signup} onFormSubmit={this.onFormSubmit.bind(this)} />
    }
    return (
      <div>
        <SignupList signups={this.state.signups} editSignup={this.editSignup.bind(this)} />
        {!this.state.isAddSignup && this.state.isEditSignup === false && <Button className="button" variant="primary" onClick={() => this.onCreate()}>Add Signup</Button>}

        {signupDetails}
      </div >
    )
  }
}