import React, {useRef} from 'react';
import styles from './styles.less';

import {InputLabel} from './../';
import {getLabelId} from '@/helpers/labelId';

const Input = ({
    labelText,
    name,
    className,

    ...props
}) => {
    const {current: formId} = useRef(getLabelId());

    return (
        <div className={className}>
            <InputLabel name={formId}>
                {labelText}
            </InputLabel>
            <input {...props} className={styles.input} id={formId} name={name} />
        </div>
    );
};

const enchancedInput = React.memo(Input);

export default enchancedInput;
