import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';


class SignupDetails extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      id: '',
      date: '',
      time: '',
      numberofsignups: 0,
      title: '',
      description: '',
      location: '',
      active: 'Yes',
    }
    if (props.signup) {
      this.state = props.signup
    } else {
      this.state = this.initialState;
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    if (name === 'active') {
      value = event.target.checked;
    }

    this.setState({
      [name]: value
    })
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="text"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                  placeholder="Date" />
              </Form.Group>
              <Form.Group controlId="time">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  name="time"
                  value={this.state.time}
                  onChange={this.handleChange}
                  placeholder="Time" />
              </Form.Group>
              <Form.Group controlId="numberofsignups">
                <Form.Label>Number Of Signups</Form.Label>
                <Form.Control
                  type="text"
                  name="numberofsignups"
                  value={this.state.numberofsignups}
                  onChange={this.handleChange}
                  placeholder="Number Of Signups" />
              </Form.Group>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Title" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  placeholder="Description" />
              </Form.Group>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                  placeholder="Location" />
              </Form.Group>
              <Form.Group controlId="location">
                <Form.Label>Active</Form.Label>
                <Form.Control
                  type="checkbox"
                  name="active"
                  checked={this.state.active}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="hidden" name="id" value={this.state.id} />
                <Button className="button" variant="success" type="submit">Save</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    )

  }
}

export default SignupDetails;