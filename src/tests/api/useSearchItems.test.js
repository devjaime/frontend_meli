import React from 'react';
import { shallow } from "enzyme";
import { useSearchItems } from '../../api/useSearchItems';

describe('Test in useSearchItems', () => {
    const query='monitor curvo'
    test('should display the component correctly', () => {
        const wrapper =  shallow( <useSearchItems query={query} />)
        expect(wrapper).toMatchSnapshot();
    })
})