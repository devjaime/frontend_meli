import React from 'react';
import '@testing-library/jest-dom';
import { mount } from "enzyme";
import {SearchBox} from '../../components/SearchBox';
import { MemoryRouter, Route } from "react-router-dom";

describe('Test in <SearchBox/>', () => {
    test('should display the component correctly', () => {
        let testHistory;
        let testLocation;

        const wrapper = mount(
            <MemoryRouter initialEntries={[`/`]}>
            <SearchBox />
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