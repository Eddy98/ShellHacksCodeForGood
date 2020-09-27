import React, { Component } from 'react'
import { Card, CardGroup, Button } from 'semantic-ui-react'
import EventCard from '../components/EventCard'

import firebase from '../firebase'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      event_view: false,
      event_signup: false,
      selected_event: null,
    }
    this.toogleEventView = this.toogleEventView.bind(this)
  }

  toogleEventView(event) {
    this.setState((state) => ({
      ...state,
      event_view: !state.event_view,
    }))
  }
  toogleEventSignUp(event) {
    this.setState((state) => ({
      ...state,
      event_signup: !state.event_signup,
    }))
  }

  test = () => {
    // firebase.addEvent({ id: "3", hours: 3 })
    // firebase.addEvent({
    //     orgName: 'Red Cross',
    //     eventName: 'Blood Donation',
    //     users: [],
    //     timeSlots: [ {startTime: 9, endTime: 10}, {startTime: 10, endTime: 11} ]
    //   })
    console.log(
        firebase.getEvents()
    )
  }

  render() {
    return (
      <>
        <Card.Group itemsPerRow={3}>
          <EventCard
            signUp={() => this.toogleEventSignUp({})}
            viewInfo={() => this.toogleEventView({})}
            orgName='Red Cross'
            eventName='Blood Donation'
            description='An event where you donate blood, que mas tu quieres'
          />
          <EventCard
            orgName='Red Cross'
            eventName='Blood Donation'
            description='An event where you donate blood, que mas tu quieres'
          />
          <EventCard
            orgName='Red Cross'
            eventName='Blood Donation'
            description='An event where you donate blood, que mas tu quieres'
          />
          <EventCard
            orgName='Red Cross'
            eventName='Blood Donation'
            description='An event where you donate blood, que mas tu quieres'
          />
        </Card.Group>
        <Button onClick={this.test}>Test</Button>
      </>
    )
  }
}
