import React from 'react';
import { mount } from 'enzyme';

import Footer from 'components/Footer';

function setup() {
  return mount(<Footer />);
}

describe('Footer', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__footer').length).toBe(1);
    expect(wrapper.find('.i-creative-commons').length).toBe(1);
  });
});
