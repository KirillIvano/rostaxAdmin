import React, {useRef} from 'react';

import {getLabelId} from '@/helpers/labelId';

import styles from './styles.less';

const FileInput = ({
    labelText,
    className,
    name,

    background,

    ...extraProps
}) => {
    const {current: formId} = useRef(getLabelId());

    return (
        <div className={className}>
            <label
                className={styles.fictionalInput}
                htmlFor={formId}
                style={background && {backgroundImage: `url("${background}")`}}
            >
                <p className={styles.inputContent}>
                    {labelText}
                </p>
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

const enchancedFileInput = React.memo(FileInput);

export default enchancedFileInput;
