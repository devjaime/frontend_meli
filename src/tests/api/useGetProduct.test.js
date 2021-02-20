import React from 'react';
import { shallow } from "enzyme";
import { useGetProduct } from '../../api/useGetProduct';

describe('Test in useGetProduct', () => {
    const itemId='MLA902105833'
    test('should display the component correctly', () => {
        const wrapper =  shallow( <useGetProduct itemId={itemId} />)
        expect(wrapper).toMatchSnapshot();
    })
})