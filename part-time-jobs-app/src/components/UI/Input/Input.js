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
    label,
    valid,
    touch,
    shouldValidate
  } = props;

  let inputElement = null;
  let validationErrorMgs = null;
  const formElementClass = [styles.InputElement];

  if (!valid && touch && shouldValidate) {
    formElementClass.push(styles.Invalid);
    validationErrorMgs = <p className={styles.ValidationErrorMsg}>Please enter a valid value</p>;
  }

  switch (elementType) {
    case 'input':
      inputElement = <input name={name} onChange={changed} {...elementConfig} value={value} />
      break;
    case 'textarea':
      inputElement = <textarea name={name} onChange={changed} className={formElementClass.join(' ')} {...elementConfig} value={value}></textarea>
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