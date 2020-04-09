import React from 'react';

import styles from './styles.less';

interface InputLabelProps {
    name: string;
    children: React.ReactNode;
}

const InputLabel: React.FC<InputLabelProps> = ({
    name,
    children,
}) => (
    <label className={styles.label} htmlFor={name}>
        {children}
    </label>
);

export default InputLabel;
