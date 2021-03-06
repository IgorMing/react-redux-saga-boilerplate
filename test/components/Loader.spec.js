import expect, { createSpy } from 'expect';
import React from 'react';
import { mount } from 'enzyme';

import Loader from 'components/Loader';

const dispatch = createSpy();

function setup() {
  const props = {
    app: {},
    dispatch
  };

  return mount(<Loader {...props} />);
}

describe('Loader', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance()).toBeA(React.Component);
  });

  it('should render properly with pulse type', () => {
    expect(wrapper.find('.app__loader').length).toBe(1);
    expect(wrapper.find('.app__loader').hasClass('app__loader--pulse')).toBe(true);
  });

  it('should render properly with rotate type', () => {
    wrapper.setProps({
      pulse: false
    });

    expect(wrapper.find('.app__loader').length).toBe(1);
    expect(wrapper.find('.app__loader').hasClass('app__loader--rotate')).toBe(true);
  });
});
