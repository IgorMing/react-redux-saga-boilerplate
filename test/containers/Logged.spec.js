import expect, { createSpy } from 'expect';
import React from 'react';
import { mount } from 'enzyme';

import Logged from 'containers/Logged';

const dispatch = createSpy();

function setup() {
  const props = {
    dispatch,
    location: {}
  };

  return mount(<Logged {...props} />);
}

describe('Logged', () => {
  const wrapper = setup(true);

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance().constructor.name).toBe('StatelessComponent');
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__logged').length).toBe(1);
  });
});
