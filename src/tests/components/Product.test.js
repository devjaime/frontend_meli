import React from 'react';
import { shallow } from "enzyme";
import { Product } from '../../components/Product';


describe('Test in <Product/>', () => {
    const location={pathname:"/items/MLA902105833",
                    state:{categories:"Computación > Monitores y Accesorios > Monitores","itemCategory":"Monitores"}
                    }
    const match={
                   path:"/items/:id",
                   url:"/items/MLA902105833",
                   isExact:true,
                   params:{id:"MLA902105833"}
                }

    test('should display the component correctly', () => {
        const wrapper =  shallow( <Product location={location} match={match} />)
        expect(wrapper).toMatchSnapshot();
    })
})