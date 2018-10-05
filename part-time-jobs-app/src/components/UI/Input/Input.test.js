import React from 'react';
import {mount} from 'enzyme';
import Input from './Input';

describe('Input', () => {
  let props;
  let mountedInput;

  const input = () => {
    if (!mountedInput) {
      mountedInput = mount(
        <Input {...props}/>
      )
    }

    return mountedInput;
  }

  beforeEach(() => {
    props = {
      elementType: undefined,
      name: undefined,
      elementConfig: undefined,
      value: undefined,
      changed: undefined,
      label: undefined
    }

    mountedInput = undefined;
  })
});