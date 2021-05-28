import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './App.css';
import './nprogress.css';
import './custom-styles.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 24,
    selectedLocation: 'all'
  }

  updateEvents = (location, eventCount) => { //either of them might be undefined when this function is called
    let locationEvents;

    getEvents().then((events) => {
      const inputNumber = eventCount || this.state.numberOfEvents;
      const selectedLocation = location || this.state.selectedLocation;
      // refactored: before, shortening the list with empty city field didnt work, now it does: 
      if (selectedLocation !== 'all') {
        locationEvents = events.filter((event) => event.location === selectedLocation)
          .slice(0, inputNumber);
        // console.log("selectedLocation !== 'all' ");
      } else if (inputNumber > '0') {
        locationEvents = events.slice(0, inputNumber);
        // console.log("inputNumber > '0' ");
      }
      else {
        locationEvents = events;
        // console.log("else...");
      }
      this.setState({
        events: locationEvents,
        numberOfEvents: inputNumber,
        selectedLocation
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          locations: extractLocations(events),
          events: events.slice(0, this.state.numberOfEvents),
          // events
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <EventList
          events={this.state.events}
        />
      </div>
    );
  }
}

export default App;
