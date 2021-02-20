import React from 'react';
import '@testing-library/jest-dom';
import { mount } from "enzyme";
import { Results } from '../../components/Results';
import { MemoryRouter, Route } from "react-router-dom";
     

describe('Test in <Results/>', () => {

    test('should display the component correctly', () => {
        let testHistory;
        let testLocation;

        const wrapper = mount(
            <MemoryRouter initialEntries={[`/`]}>
            <Results />
            <Route
                path={`*`}
                render={routeProps => {
                testHistory = routeProps.history
                testLocation = routeProps.location
                return null
                }}/>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(testHistory).toMatchSnapshot();
        expect(testLocation).toMatchSnapshot();
    })
})