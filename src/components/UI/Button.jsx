import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  const { children, className, disabled = false } = props;

  return (
    <button
      {...props}
      className={styles.button + ' ' + (className ? className : '')}
      disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
