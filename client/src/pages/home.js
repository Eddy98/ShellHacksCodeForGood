import React, { Component } from 'react';
import { Card, CardGroup } from 'semantic-ui-react';
import EventCard from "../components/EventCard"

export default class Home extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <>
                <Card.Group
                itemsPerRow={3}>
                    <EventCard
                        orgName="Red Cross"
                        eventName="Blood Donation"
                        description="An event where you donate blood, que mas tu quieres"
                    />
                    <EventCard
                        orgName="Red Cross"
                        eventName="Blood Donation"
                        description="An event where you donate blood, que mas tu quieres"
                    />
                    <EventCard
                        orgName="Red Cross"
                        eventName="Blood Donation"
                        description="An event where you donate blood, que mas tu quieres"
                    />
                    <EventCard
                        orgName="Red Cross"
                        eventName="Blood Donation"
                        description="An event where you donate blood, que mas tu quieres"
                    />
                </Card.Group>
            </>
        );
    }
}