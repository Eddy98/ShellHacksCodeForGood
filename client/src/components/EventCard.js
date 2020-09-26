import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";

const EventCard = ({ orgName, eventName, description }) => {
  return (
    <>
      <Card color="green">
        <Card.Content>
          <Card.Header>{eventName}</Card.Header>
          <Card.Meta>{orgName}</Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            floated="right"
            icon="info"
            color="blue"
            labelPosition="left"
            content="View"
          />
          <Button
            floated="right"
            color="green"
            icon="signup"
            content="Sign-Up"
          />
        </Card.Content>
      </Card>
    </>
  );
};

export default EventCard;
