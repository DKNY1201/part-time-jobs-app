import React from 'react';

import styles from './Input.css';

const input = (props) => {
  let inputElement = null;
  let validationErrorMgs = null;
  const elementFormClass = [styles.InputElement];

  switch (props.elementType) {
    case 'input':
      inputElement = <input onChange={props.changed} className={elementFormClass.join(' ')} {...props.elementConfig} value={props.value} />
      break;
    case 'textarea':
      inputElement = <textarea className={elementFormClass.join(' ')} {...props.elementConfig} value={props.value}></textarea>
      break;
    case 'select':
      inputElement = <select value={props.value}>
        {props.elementConfig.options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
      </select>
      break;
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
    </div>
  );
}

export default input;