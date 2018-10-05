import React from 'react';
import {mount, configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './Input';

configure({adapter: new Adapter()});

describe('Input', () => {
  let props;
  let mountedInput;

  const input = () => {
    if (!mountedInput) {
      mountedInput = mount(
        <Input {...props} />
      )
    }

    return mountedInput;
  }

  beforeEach(() => {
    props = {
      elementType: undefined,
      name: 'name',
      elementConfig: {},
      value: undefined,
      changed: undefined,
      label: 'label',
      valid: undefined,
      touch: undefined,
      shouldValidate: undefined
    }

    mountedInput = undefined;
  });

  describe('when "elementType" is input', () => {
    const wrapper = shallow(<Input/>);

    beforeEach(() => {
      props.elementType = 'input';
    });

    it('should render an input', () => {
      console.log('input()',input().html())
      console.log('input().find(\'input\').length',input().find('input').length)
      expect(input().find('input').length).toBe(1);
    });
  })
});