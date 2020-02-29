import React from 'react';
import styles from './styles.less';


const Input = ({
    labelText,
    name,

    ...props
}) => (
    <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor={name}>
            {labelText}
        </label>
        <input className={styles.input} name={name} {...props} />
    </div>
);

export default Input;
