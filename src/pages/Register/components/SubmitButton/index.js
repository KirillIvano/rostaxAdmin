import React from 'react';

import styles from './styles.less';
import {Button} from '@/components';

const SubmitButton = ({
    disabled,
}) => {
    return (
        <Button
            className={styles.submitButton}
            disabled={disabled}
            type="submit"
        >
            Подтвердить
        </Button>
    );
};

export default SubmitButton;
