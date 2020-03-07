import React, {useRef} from 'react';

import {getLabelId} from '@/helpers/labelId';

import styles from './styles.less';

const FileInput = ({
    labelText,
    className,
    name,

    ...extraProps
}) => {
    const {current: formId} = useRef(getLabelId());

    return (
        <div className={className}>
            <label
                className={styles.fictionalInput}
                htmlFor={formId}
            >
                {labelText}
            </label>

            <input
                {...extraProps}
                name={name}
                id={formId}
                className={styles.realInput}

                type='file'
            />
        </div>
    );
};

export default FileInput;
