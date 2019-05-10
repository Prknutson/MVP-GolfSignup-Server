import React from 'react';

const SignupList = (props) => {
  return (<div>
    <div className="signupHeader">Golf Signups</div>
    {props.signups.map((signup) => {
      return <div className="signupDetails" key={signup.id} onClick={props.editSignup.bind(this, signup)}>{signup.title} </div>
    })}
  </div>)
}

export default SignupList;