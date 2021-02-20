import React from 'react';
import { shallow } from "enzyme";
import {App} from '../../src/App';
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";

describe('Test in <App/>', () => {
    test('should display the component correctly', () => {
        const wrapper =  shallow( <App/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('should display the component correctly', () => {
        let testHistory;
        let testLocation;
        let History={"length":2,"action":"PUSH","location":{"pathname":"/items","search":"?search=monitor curvo","hash":"","key":"q06uc0"}};
        let Location={"pathname":"/items","search":"?search=monitor curvo","hash":"","key":"q06uc0"};
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/`]}>
            <App />
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