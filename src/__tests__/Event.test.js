import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {

    test('f2/scen1 - does element containing event exist?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('f2/scen1 - does summary exist in element?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('f2/scen1 - does summary (= event title) render correctly?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);
        expect(EventWrapper.find('.summary').text()).toBe(event.summary);
    });

    test('f2/scen1 - does start time exist in element?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);
        expect(EventWrapper.find('.start-time')).toHaveLength(1);
    });

    test('f2/scen1 - does start time render correctly?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);
        expect(EventWrapper.find('.start-time').text()).toBe(event.start.dateTime);
    });

    test('f2/scen1 - does location exists?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('f2/scen1 - does location render correctly?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);
        expect(EventWrapper.find('.location').text()).toBe(event.location);
    });

    test('f2/scen1 - does button "Show Details" exist?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);
        expect(EventWrapper.find('.btn-details')).toHaveLength(1);
    });

    test('f2/scen2 - does state change to show + hide Details when buttons "Show Details"/"Hide Details" are clicked?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);

        EventWrapper.find('button').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);

        EventWrapper.find('button').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(false);
    });

    test('f2/scen2 - does description exist in element, when state is true?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);
        EventWrapper.setState({
            showDetails: true
        });
        expect(EventWrapper.find('.description')).toHaveLength(1);
    });

    test('f2/scen2 - does description render correctly, when state is true?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);
        EventWrapper.setState({
            showDetails: true
        });
        expect(EventWrapper.find('.description').text()).toBe(event.description);
    });

    test('f2/scen2- does button "Hide Details" exist, when state is true?', () => {
        const event = mockData[0];
        const EventWrapper = shallow(<Event event={event} />);
        EventWrapper.setState({
            showDetails: true
        });
        expect(EventWrapper.find('.btn-hide-details')).toHaveLength(1);
    });

    // test('change state to hide Details when button "Hide Details" clicked', () => {
    //     const event = mockData[0];
    //     const EventWrapper = shallow(<Event event={event} />);
    //     EventWrapper.find('.btn-hide-details').simulate('click');
    //     expect(EventWrapper.state('showDetails')).toBe(false);
    // });

});