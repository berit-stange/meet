import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';
import App from '../App';
import EventList from '../EventList';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    let EventListWrapper;
    let EventWrapper;
    let NumberOfEventsWrapper;

    // Scenario 1
    test('When user has not specified a number, default number "24" will be used for list', ({ given, when, then }) => {
        given('app is loaded', () => {
            AppWrapper = mount(<App />);
            NumberOfEventsWrapper = mount(<NumberOfEvents />);
            expect(NumberOfEventsWrapper.find('.select-number')).toHaveLength(1);
        });

        when('user has not specified a number', () => { });

        then('the user should see list of events of default length "24"', () => {
            expect(AppWrapper.state('numberOfEvents')).toBe(24);
        });
    });

    // Scenario 2
    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('list with correct number events is loaded', () => {
            expect(AppWrapper.state('numberOfEvents')).toBe(24);
        });

        when('user puts in number in input field', () => {
            const input = { target: { value: 10 } };
            AppWrapper.find('.number-input').simulate('change', input);
        });

        then('the list of events should be limited to the number of events user has chosen', () => {
            expect(AppWrapper.state('numberOfEvents')).toBe(10);
        });
    });
});