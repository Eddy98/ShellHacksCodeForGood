import React, { Component } from 'react';
import { Card, CardGroup, Container, Divider, Grid, Header, Segment } from 'semantic-ui-react';
import EventCard from "../components/EventCard"
import EventSignUpModal from "../components/EventSignUpModal"

import firebase from '../firebase'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      event_view: false,
      event_signup: false,
      events: [],
      selected_event: null,
    }
    this.toogleEventView = this.toogleEventView.bind(this)
  }

    async componentDidMount(){
        const events = await firebase.getEvents();
        this.setState(state=>({...this.state,events:events}))
    }

    toogleEventView(event) {
        this.setState(state => ({
            ...state,
            event_view: !state.event_view,
            selected_event: event
        }));
    }
    toogleEventSignUp(event) {
        this.setState(state => ({
            ...state, 
            event_signup: !state.event_signup,
            selected_event: event
        }));
    }
    render() {
        const {event_signup, selected_event, events} = this.state
        // const events = [
        //     {
        //          orgName:"Red Cross",
        //          eventName:"Blood Donation",
        //          description:"An event where you donate blood, que mas tu quieres"
        //      },
        //      {
        //          orgName:"Red Cross",
        //          eventName:"Blood Donation",
        //          description:"An event where you donate blood, que mas tu quieres"
        //      },
        //      {
        //          orgName:"Red Cross",
        //          eventName:"Blood Donation",
        //          description:"An event where you donate blood, que mas tu quieres"
        //      }
        //  ]

        return (
            <>
            <Container>
                <Header as="h1">
                    Events Near you
                </Header>
                <Divider/>
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
                                        signUp={()=>this.toogleEventSignUp(event)}
                                        viewInfo={()=>this.toogleEventView(event)}
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
                onClose={()=>this.toogleEventSignUp({})}
                event={selected_event}
            />
            </>
        );
    }
}
