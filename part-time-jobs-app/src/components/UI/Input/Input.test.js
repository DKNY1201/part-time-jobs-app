import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as resources from '../../../shared/resources';

import Input from './Input';

configure({adapter: new Adapter()});

describe('<Input />', () => {
  let wrapper;
	let props;

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
    };
  });

  describe('when "elementType" is "input"', () => {
    beforeEach(() => {
	    props.elementType = 'input';

	    wrapper = shallow(<Input {...props}/>);
    });

    it('should render an input', () => {
      expect(wrapper.find('input').length).toBe(1);
    });

    describe('when error conditions are met', () => {
      beforeEach(() => {
        props.valid = false;
        props.touch = true;
        props.shouldValidate = true;
        props.elementType = 'input';

        wrapper = shallow(<Input {...props} />);
      });

      it('should render error message', () => {
        expect(wrapper.find('p').text()).toContain(resources.INPUT_ERROR_MSG);
      });
    });
  });

	describe('when "elementType" is "textarea"', () => {
		beforeEach(() => {
			props.elementType = 'textarea';

			wrapper = shallow(<Input {...props}/>);
		});

		it('should render a textarea', () => {
			expect(wrapper.find('textarea').length).toBe(1);
		});

    describe('when error conditions are met', () => {
      beforeEach(() => {
        props.valid = false;
        props.touch = true;
        props.shouldValidate = true;
        props.elementType = 'textarea';

        wrapper = shallow(<Input {...props} />);
      });

      it('should render error message', () => {
        expect(wrapper.find('p').text()).toContain(resources.TXT_ERROR_MSG);
      });
    });
	});

	describe('when "elementType" is "select"', () => {
		beforeEach(() => {
			props.elementType = 'select';
      props.elementConfig.options = [
				{value: 1, name: 'Clean Up'},
				{value: 2, name: 'Grass Cutting'},
				{value: 3, name: 'Editing'},
				{value: 4, name: 'Writing'},
				{value: 5, name: 'Data Entry'},
				{value: 6, name: 'Event Planning'},
				{value: 7, name: 'Fixing Machine'},
				{value: 8, name: 'Advertising'},
				{value: 9, name: 'Washing Car'}
			];
			wrapper = shallow(<Input {...props}/>);
		});

		it('should render a select', () => {
			expect(wrapper.find('select').length).toBe(1);
		});

		it('should have at least 1 option', () => {
		  expect(wrapper.find('option').length).toBeGreaterThan(0);
    });

		it('should renders number of options equal to length of options inputted', () => {
			expect(wrapper.find('option').length).toEqual(props.elementConfig.options.length);
		});

    describe('when error conditions are met', () => {
      beforeEach(() => {
        props.valid = false;
        props.touch = true;
        props.shouldValidate = true;
        props.elementType = 'select';

        wrapper = shallow(<Input {...props} />);
      });

      it('should render error message', () => {
        expect(wrapper.find('p').text()).toContain(resources.SELECT_ERROR_MSG);
      });
    });
	});

	describe('when "changed" attribute is defined', () => {
		beforeEach(() => {
      props.elementType = 'input';
      props.changed = jest.fn();

      wrapper = shallow(<Input {...props} />);
		});

		it('should has same value for "onChange" as passed function', () => {
			expect(wrapper.find('input').props().onChange).toBe(props.changed);
		})
	})

});