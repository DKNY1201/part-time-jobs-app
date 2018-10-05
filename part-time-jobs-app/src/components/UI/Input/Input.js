import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.css';

const input = (props) => {
  const {
    elementType,
    name,
    elementConfig,
    value,
    changed,
    label
  } = props;

  let inputElement = null;
  let validationErrorMgs = null;
  const elementFormClass = [styles.InputElement];

  switch (elementType) {
    case 'input':
      inputElement = <input name={name} onChange={changed} className={elementFormClass.join(' ')} {...elementConfig} value={value} />
      break;
    case 'textarea':
      inputElement = <textarea name={name} onChange={changed} className={elementFormClass.join(' ')} {...elementConfig} value={value}></textarea>
      break;
    case 'select':
      inputElement = <select name={name} onChange={changed} value={value}>
        {{...elementConfig}.options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
      </select>
      break;
    default: break;
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{label}</label>
      {inputElement}
      {validationErrorMgs}
    </div>
  );
}

input.propTypes = {
  elementType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  elementConfig: PropTypes.object.isRequired,
  value: PropTypes.string,
  changed: PropTypes.func,
  label: PropTypes.string.isRequired,
}

export default input;