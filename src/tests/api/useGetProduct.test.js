import React from 'react';
import { shallow } from "enzyme";
import { useGetProduct } from '../../api/useGetProduct';

describe('Test in useGetProduct', () => {
    const itemId='MLA902105833';
    const data= {author:
        {name:"Jaime",
        lastname:"Hernandez"},
        item:{id:"MLA877575385",
              title:"Monitor Curvo Samsung C24f390fh Led 24  Negro 100v/240v",
              price:{currency:"ARS",
              amount:22100,
              decimals:0}},
              picture:"http://http2.mlstatic.com/D_975053-MLA32072674797_092019-I.jpg",
              condition:"new",
              free_shipping:true,
              sold_quantity:250,
              description:"Disfrutá de todas las cualidades que el monitor Samsung C24F390FH tiene para ofrecerte."}
    jest.mock('../../api/useGetProduct', () => ({
        fetchData: jest.fn().mockReturnValue(data),
      }));
    test('should display the component correctly', () => {
        const wrapper =  shallow( <useGetProduct itemId={itemId} />)
        expect(wrapper).toMatchSnapshot();
    })
})
