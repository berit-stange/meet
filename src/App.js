import React, { Component /* , PureComponent */ } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
// import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, /* checkToken , getAccessToken */ } from './api';
import { OfflineAlert } from './Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './App.css';
import './nprogress.css';
import './custom-styles.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 24,
    selectedLocation: 'all',
    offlineAlert: '',
    // showWelcomeScreen: undefined
  }

  getData = () => { //map the locations and filter the events by each location to get the length of the resulting array
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(',').shift() //split the location at the occurrence of a comma followed by a space ", " > return an array
      //use the shift() array function to get the first element in the array, which is the name of the city
      return { city, number };
    })
    return data;
  };

  updateEvents = (location, eventCount) => { //either of them might be undefined when this function is called
    let locationEvents;
    getEvents().then((events) => {
      const inputNumber = eventCount || this.state.numberOfEvents;
      const selectedLocation = location || this.state.selectedLocation; //without variable the filtered list shortening doesnt work
      if (selectedLocation === 'all') { // refactored #2
        locationEvents = events.slice(0, inputNumber);
      } else {
        locationEvents = events.filter((event) => event.location === selectedLocation) //why does it not work with location, only with the variable?
          .slice(0, inputNumber);
      }
      this.setState({
        events: locationEvents,
        numberOfEvents: inputNumber, //with this.state.selectedLocation, number doesn't render  (without const inputNumber)
        // numberOfEvents: this.state.numberOfEvents, // input number works but 24 is rendered (without const inputNumber)
        selectedLocation // not neccessary
      });
    });
  }

 /*  async */ componentDidMount() {
    this.mounted = true;

    // const accessToken = localStorage.getItem('access_token'); // this block is for the verification of the app
    // const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    // const searchParams = new URLSearchParams(window.location.search);
    // const code = searchParams.get("code");
    // this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    // if ((code || isTokenValid) && this.mounted) {

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          locations: extractLocations(events),
          events: events.slice(0, this.state.numberOfEvents), //without slice() list isnt shortened to default number
        });
        if (!navigator.onLine) {
          this.setState({
            offlineAlert: 'You are offline'
          })
        }
      }
    });

    // }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { events } = this.state;
    // if (this.state.showWelcomeScreen === undefined)
    //   return <div
    //     className="App" />

    return (
      <div className="App">

        <div className="offline-container">

          <div className="offline-alert">
            <OfflineAlert text={this.state.offlineAlert} />
          </div>
        </div>

        <h1>Meet App</h1>

        <div className="input-fields-area">
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          <NumberOfEvents
            numberOfEvents={this.state.numberOfEvents}
            updateEvents={this.updateEvents}
          />
        </div>

        {/* <div className="data-vis-wrapper" > */}
        <EventGenre events={events} />

        <ResponsiveContainer height={300} /* width="50%" height="50%" */ >

          <ScatterChart
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis type="number" dataKey="number" name="number of events" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={this.getData()} fill="#e25d3c" />
          </ScatterChart>
        </ResponsiveContainer>
        {/* </div> */}

        <EventList
          events={this.state.events}
        />

        {/* <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} /> */}

      </div>
    );
  }
}

export default App;
