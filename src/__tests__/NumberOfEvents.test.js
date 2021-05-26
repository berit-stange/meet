import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents/> component', () => {

    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('does number-container render?', () => {
        expect(NumberOfEventsWrapper.find('.select-number')).toHaveLength(1);
    });

    // test('does number in container render?', () => { //nur um zu sehen, ob da die Zahl angezeigt wird oder wie? 
    //     const number = NumberOfEventsWrapper.state('numberOfEvents');
    //     expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(number);
    // }); 

    // test('does state change on input change?', () => { //aus, weil ich den state nicht mehr in dieser Komponente festlege, sondern in App
    //     NumberOfEventsWrapper.setState({
    //         numberOfEvents: 10
    //     });
    //     const eventObject = { target: { value: 3 } };
    //     NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
    //     expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(3);
    // });

})