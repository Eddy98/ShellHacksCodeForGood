import React, { Component } from "react";
import { Button, Card, Modal, Image, Header, Grid, Form, Divider } from "semantic-ui-react";

export default class NewEventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      orgName: "",
      description: "",
      timeSlots: []
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange = (_, {name, value}) => {
    this.setState(state=>({...state, [name]: value}))
  }

  render() {
    const { isOpen, onClose, event } = this.props;
    const {phone} = this.state
    if (!event) {
      return <></>;
    }
    const {eventName, orgName, description} = event;

    return (
      <Modal 
        open={isOpen} 
        onClose={onClose}
        size="tiny"
      >
        <Modal.Header>{eventName}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header as="h5">{orgName}</Header>
            <p>{description}</p>
          </Modal.Description>
          <Divider/>
          <Form>
            <Form.Group>
              <Form.Input
                label="First Name"
                name="firstName"
                required
                onChange={this.onChange}
              />
              <Form.Input
                label="Last Name"
                required
                onChange={this.onChange}

              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Email"
                required
                onChange={this.onChange}
              />
              <Form.Input
                label="Phone Number"
                name="phone"
                value={phone}
                required
                onChange={(event,{name,value})=>{
                  if(!isNaN(value)) {
                    this.setState(state=>(
                      {...state, 
                        [name]: value}))
                  }
                }}
              />
            </Form.Group>
            <Divider/>
            <Header as="h4">Time Slots</Header>
            <Form.Checkbox
              inline
              name=''
              label='8:00am - 11:00am'
              onChange={this.onChange}
            />
            <Form.Checkbox
              inline
              label='11:00am - 12:00pm'
              onChange={this.onChange}
            />
            <Form.Checkbox
              inline
              label='12:00pm - 1:00pm'
              onChange={this.onChange}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={onClose}>Cancel</Button>
          <Button positive>Sign-up</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
