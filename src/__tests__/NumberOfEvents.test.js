import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents/> component', () => {

    test('does number container render?', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        expect(NumberOfEventsWrapper.find('.select-number')).toHaveLength(1);
    });

    test('does container render?', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        const number = NumberOfEventsWrapper.state('numberEvents');
        expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(number);
    });

    test('does state change on input change?', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents />);

        NumberOfEventsWrapper.setState({
            numberEvents: 10
        });
        const eventObject = { target: { value: 30 } };

        NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberEvents')).toBe(30);
    });

})