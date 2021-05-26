import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    let EventListWrapper;
    let EventWrapper;

    // Scenario 1
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('main page is loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('the user the user scrolls down', () => {
            //no action
        });

        then('the user should see a list of all events', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });


    // Scenario 2
    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('all elements are collapsed', () => {
            EventListWrapper = mount(<EventList events={mockData} />);
            const event = mockData[0];
            EventWrapper = mount(< Event event={event} />);
            expect(EventWrapper.state('showDetails')).toBe(false);
        });

        when('user clicks button to show details', () => {
            EventWrapper.find('button').simulate('click');
        });

        then('details should be expanded for user to see the details', () => {
            expect(EventWrapper.state('showDetails')).toBe(true);
        });
    });


    // Scenario 3
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('user has expanded event details', () => {
            EventListWrapper = mount(<EventList events={mockData} />);
            const event = mockData[0];
            EventWrapper = mount(< Event event={event} />);
            EventWrapper.find('button').simulate('click');
            expect(EventWrapper.state('showDetails')).toBe(true);
        });

        when('the user clicks button to hide details', () => {
            EventWrapper.find('button').simulate('click');
        });

        then('element should be collapsed', () => {
            expect(EventWrapper.state('showDetails')).toBe(false);
        });
    });

});