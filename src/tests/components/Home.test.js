import React from 'react';
import { shallow } from "enzyme";
import {Home} from '../../components/Home';

describe('Test in <Home/>', () => {
    test('should display the component correctly', () => {
        const wrapper =  shallow( <Home/>)
        expect(wrapper).toMatchSnapshot();
    })
})