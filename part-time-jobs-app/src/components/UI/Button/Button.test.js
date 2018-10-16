import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as resources from '../../../shared/resources';

import Button from './Button';

configure({adapter: new Adapter()});

describe('<Button />', function () {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {};
  });

  describe('when disabled is true', () => {
    beforeEach(() => {
      props.disabled = true;
      wrapper = shallow(<Button {...props} />);
    });

    it('should render a disabled button', () => {
      expect(wrapper.find('button').props().disabled).toBeTruthy();
    });
  });

  describe('when clicked function is defined', () => {
    beforeEach(() => {
      props.clicked = jest.fn();
      wrapper = shallow(<Button {...props} />);
    });

    it('should has same value for "onClick" as passed function', () => {
      expect(wrapper.find('button').props().onClick).toBe(props.clicked);
    });
  });

  describe('when children props is passed', () => {
    beforeEach(() => {
      props.children = 'Submit';
      wrapper = shallow(<Button {...props} />);
    });

    it('should render text with content from children attribute', () => {
      expect(wrapper.find('button').text()).toContain(props.children);
    });
  });

  // describe('when button Type is defined', () => {
  //   beforeEach(() => {
  //     props.btnType = 'Success';
  //     wrapper = shallow(<Button {...props} />);
  //   });
  //
  //   it('should has css class with value same as button type', () => {
  //     console.log(wrapper.find('button').html())
  //     expect(wrapper.find('button').hasClass(props.btnType)).toBeTruthy();
  //   });
  // });
})