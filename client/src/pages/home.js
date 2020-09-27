import React, { Component } from 'react';
import { Card, CardGroup } from 'semantic-ui-react';
import EventCard from "../components/EventCard"

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            event_view: false,
            event_signup:false,
            selected_event: null
        };
        this.toogleEventView = this.toogleEventView.bind(this)
    }

    toogleEventView(event) {
        this.setState(state => ({
            ...state, event_view: !state.event_view
        }));
    }
    toogleEventSignUp(event) {
        this.setState(state => ({
            ...state, event_signup: !state.event_signup
        }));
    }

    render() {
        return (
            <>
                <Card.Group
                itemsPerRow={3}>
                    <EventCard
                        signUp={() => this.toogleEventSignUp({})}
                        viewInfo={() => this.toogleEventView({})}
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