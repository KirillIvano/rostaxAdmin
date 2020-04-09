import React, {useRef} from 'react';

import {InputLabel, Input} from '..';
import {getLabelId} from '@/helpers/labelId';

interface LabeledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText: string;
    name: string;
    className: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
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
            <Input {...props} id={formId} name={name} />
        </div>
    );
};

const enchancedInput = React.memo(LabeledInput);

export default enchancedInput;
