import React, { Component } from "react";
import { Button, Card, Modal, Image, Header, Grid, Form, Divider } from "semantic-ui-react";

export default class EventSignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isOpen, onClose, event } = this.props;

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
                required
              />
              <Form.Input
                label="Last Name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Email"
                required
              />
              <Form.Input
                label="Phone Number"
                required
              />
            </Form.Group>
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
