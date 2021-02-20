import React from 'react';
import '@testing-library/jest-dom';
import { mount } from "enzyme";
import { Results } from '../../components/Results';
import { MemoryRouter, Route } from "react-router-dom";
     

describe('Test in <Results/>', () => {

    test('should display the component correctly', () => {
        let testHistory;
        let testLocation;
        let History={"length":2,"action":"PUSH","location":{"pathname":"/items","search":"?search=monitor curvo","hash":"","key":"q06uc0"}};
        let Location={"pathname":"/items","search":"?search=monitor curvo","hash":"","key":"q06uc0"};
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/`]}>
            <Results />
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