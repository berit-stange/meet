import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents/> component', () => {

    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('does number container render?', () => {
        expect(NumberOfEventsWrapper.find('.select-number')).toHaveLength(1);
    });

    test('does container render?', () => {
        const number = NumberOfEventsWrapper.state('numberEvents');
        expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(number);
    });

    test('does state change on input change?', () => {
        NumberOfEventsWrapper.setState({
            numberEvents: 10
        });
        const eventObject = { target: { value: 30 } };
        NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberEvents')).toBe(30);
    });

})