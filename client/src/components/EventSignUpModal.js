import React, { Component } from "react";
import { Button, Card, Modal, Image, Header, Grid } from "semantic-ui-react";

export default class EventSignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isOpen, onClose } = this.props;
    return (
      <Modal 
        open={isOpen} 
        onClose={onClose}
      >
        <Modal.Header>eventName</Modal.Header>
        <Modal.Content image>
          <Header>orgName</Header>
          <Modal.Description>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <p>description</p>
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button>Cancel</Button>
          <Button positive>Ok</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
