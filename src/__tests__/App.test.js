import React from 'react';
import { shallow } from 'enzyme';
import App from '../App'; // from App.js > can’t test component without importing this

// create group/scope via describe function
describe('<App /> component', () => { // test description: accurate enough to be found in long list of tests
    test('render list of events', () => {
        const AppWrapper = shallow(<App />); // use shallow rendering API, App is parameter, set it to constant AppWrapper
        expect(AppWrapper.find(EventList)).toHaveLength(1); // expect() runs a search with find(), searching for EventList components within AppWrapper > only 1 should exist
    });
});
