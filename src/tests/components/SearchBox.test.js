import React from 'react';
import '@testing-library/jest-dom';
import { mount } from "enzyme";
import {SearchBox} from '../../components/SearchBox';
import { MemoryRouter, Route } from "react-router-dom";

describe('Test in <SearchBox/>', () => {
    test('should display the component correctly', () => {
        let testHistory;
        let testLocation;
        let History={"length":2,"action":"PUSH","location":{"pathname":"/items","search":"?search=monitor curvo","hash":"","key":"q06uc0"}};
        let Location={"pathname":"/items","search":"?search=monitor curvo","hash":"","key":"q06uc0"};
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/`]}>
            <SearchBox />
            <Route
                path={`*`}
                render={routeProps => {
                testHistory = History
                testLocation = Location
                return null
                }}/>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(testHistory).toMatchSnapshot();
        expect(testLocation).toMatchSnapshot();
    })
})