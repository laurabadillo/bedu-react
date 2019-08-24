
import React from 'react';
import { shallow } from 'enzyme';
import Page404 from '../ui/Page404/Page404';

describe('Page404 component', () => {
  it ('should do the correct operation', () => {
    expect(1 + 1).toBe(2);
  });
  it ('should render Page404 component', () => {
    const wrapper = shallow(<Page404 />);
    const h3 = wrapper.find('h3'); 
    const result = h3.text(); 

    expect(result).toBe('Page not found');
  });
});