import React from 'react';
import { shallow } from "enzyme";
import { useSearchItems } from '../../api/useSearchItems';

describe('Test in useSearchItems', () => {
    const query='monitor curvo';
    test('should display the component correctly', () => {
        const data= {author:{name:"Jaime",
                     lastname:"Hernandez"},
                     categories:["Computación","Monitores y Accesorios","Monitores"],
                     items:[{id:"MLA877575385",
                     title:"Monitor Curvo Samsung C24f390fh Led 24  Negro 100v/240v",
                     price:{currency:"ARS",amount:22100,decimals:0},
                     picture:"http://http2.mlstatic.com/D_975053-MLA32072674797_092019-I.jpg",
                     condition:"new",
                     free_shipping:true,
                     category:"Monitores",
                     location:"Capital Federal"},
                     {id:"MLA908723383",
                     title:"Monitor Curvo Samsung C27f390fhl Led 27  Negro 100v/240v",
                     price:{currency:"ARS",amount:30598,decimals:0},
                     picture:"http://http2.mlstatic.com/D_905402-MLA44701817913_012021-I.jpg",
                     condition:"new",
                     free_shipping:true,
                     category:"Monitores",
                     location:"Capital Federal"},
                     {id:"MLA886329934",
                     title:"Monitor Curvo Samsung C32f391fw Led 31.5  Blanco Alto Brillo 100v/240v",
                     price:{currency:"ARS",amount:45000,decimals:0},
                     picture:"http://http2.mlstatic.com/D_984665-MLA32072929270_092019-I.jpg",
                     condition:"new",free_shipping:true,category:"Monitores","location":"Capital Federal"},
                     {id:"MLA903436961",title:"Monitor Curvo Asus Tuf Gaming Vg24vq Led 23.6  Negro 100v/240v",
                     price:{currency:"ARS",amount:56999,decimals:0},
                     picture:"http://http2.mlstatic.com/D_812033-MLA44490472301_012021-I.jpg",
                     condition:"new",free_shipping:true,
                     category:"Monitores",location:"Buenos Aires"}]}
        jest.mock('../../api/useSearchItems', () => ({
            fetchData: jest.fn().mockReturnValue(data),
        }));
        const wrapper =  shallow( <useSearchItems query={query} />)
        expect(wrapper).toMatchSnapshot();
    })
})