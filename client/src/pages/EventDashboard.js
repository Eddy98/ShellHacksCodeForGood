import React, { Component } from 'react';
import { Button, Card, CardGroup, Container, Divider, Grid, Header, Segment } from 'semantic-ui-react';
import EventCard from "../components/EventCard"
import EventSignUpModal from "../components/EventSignUpModal"

export default class EventDashboard extends Component {
    constructor() {
        super();
        this.state = {
            event_checkIn:false,
            event_create: false,
            selected_event: null
        };
        this.toogleEventCreate = this.toogleEventCreate.bind(this)
    }

    toggleEventCreate() {
        this.setState(state => ({
            ...state,
            event_create: !state.event_create,
        }));
    }
    toogleEventCreate(event) {
        this.setState(state => ({
            ...state, 
            event_signup: !state.event_signup,
            selected_event: event
        }));
    }
    render() {
        const {event_checkIn: event_signup, selected_event} = this.state

        const events = [
            {
                 orgName:"Red Cross",
                 eventName:"Blood Donation",
                 description:"An event where you donate blood, que mas tu quieres"
             },
             {
                 orgName:"Red Cross",
                 eventName:"Blood Donation",
                 description:"An event where you donate blood, que mas tu quieres"
             },
             {
                 orgName:"Red Cross",
                 eventName:"Blood Donation",
                 description:"An event where you donate blood, que mas tu quieres"
             }
         ]

         console.log(events)
        return (
            <>
            <Container>
                <Header as="h1">
                    Current Events
                </Header>
                <Divider/>
                <Button
                    floated="right"
                    content="Add Event"
                />
                <Grid textAlign="left">
                    <Grid.Row verticalAlign="middle">
                        <Grid.Column verticalAlign="middle">
                            <Card.Group
                                centered
                                itemsPerRow={3}>
                                { events && events.map((event, index) => {
                                    return (
                                    <EventCard
                                        orgName={event.orgName}
                                        description={event.description}
                                        eventName={event.eventName}
                                        key={index}
                                    />
                                )})
                                }
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            <EventSignUpModal
                isOpen={event_signup}
                onClose={()=>this.toogleEventCheckIn({})}
                event={selected_event}
            />
            </>
        );
    }
}