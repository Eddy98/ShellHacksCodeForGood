import React, { Component } from "react";
import { Button, Card, Modal, Image } from "semantic-ui-react";

export default class EventSignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isOpen, onClose } = this.props;
    return (
      <Modal open={isOpen} onClose={onClose}>
        <Modal.Header>Upload image</Modal.Header>
        <Modal.Content image>
          <Image
            size="medium"
            src="/images/wireframe/image-square.png"
            wrapped
          />
          <Modal.Description>
            <p>Would you like to upload this image?</p>
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
