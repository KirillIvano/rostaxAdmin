// @flow

import React from 'react';
import type {Node} from 'react';

import styles from './styles.less';

type InputLabelProps = {
    name: string,
    children: Node,
};

const InputLabel = ({
    name,
    children,
}: InputLabelProps) => (
    <label className={styles.label} htmlFor={name}>
        {children}
    </label>
);

export default InputLabel;
