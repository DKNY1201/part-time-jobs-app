import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.css';
import * as resources from '../../../shared/resources';

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
  let errorMsg = null;


  switch (elementType) {
    case 'input':
      inputElement = <input name={name} onChange={changed} {...elementConfig} value={value} />;
      errorMsg = resources.INPUT_ERROR_MSG;
      break;
    case 'textarea':
      inputElement = <textarea name={name} onChange={changed} className={formElementClass.join(' ')} {...elementConfig} value={value}></textarea>;
      errorMsg = resources.TXT_ERROR_MSG;
      break;
    case 'select':
      inputElement = <select name={name} onChange={changed} value={value}>
        {{...elementConfig}.options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
      </select>;
      errorMsg = resources.SELECT_ERROR_MSG;
      break;
    default: break;
  }

  if (!valid && touch && shouldValidate) {
    formElementClass.push(styles.Invalid);
    validationErrorMgs = <p className={styles.ValidationErrorMsg}>{errorMsg}</p>;
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