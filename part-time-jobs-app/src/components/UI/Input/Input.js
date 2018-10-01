import React from 'react';

import styles from './Input.css';

const input = (props) => {
  let inputElement = null;
  let validationErrorMgs = null;
  const elementFormClass = [styles.InputElement];

  switch (props.elementType) {
    case 'input':
      inputElement = <input name={props.name} onChange={props.changed} className={elementFormClass.join(' ')} {...props.elementConfig} value={props.value} />
      break;
    case 'textarea':
      inputElement = <textarea name={props.name} onChange={props.changed} className={elementFormClass.join(' ')} {...props.elementConfig} value={props.value}></textarea>
      break;
    case 'select':
      inputElement = <select name={props.name} onChange={props.changed} value={props.value}>
        {props.elementConfig.options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
      </select>
      break;
    default: break;
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
      {validationErrorMgs}
    </div>
  );
}

export default input;