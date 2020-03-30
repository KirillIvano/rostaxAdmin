import React, {useCallback} from 'react';
import classnames from 'classnames';

import {Input, Button} from '@/components';

import {useStateChange} from './../../hooks/useStateChange';
import styles from './styles.less';

const PairedInput = ({
    name,
    value,
    isAdditional=false,
    addItem,
    deleteItem,
}) => {
    const [newName, isNameChanged, setName] = useStateChange(name);
    const [newValue, isValueChanged, setValue] = useStateChange(value);

    const handleNameChange = useCallback(e => setName(e.currentTarget.value), []);
    const handleValueChange = useCallback(e => setValue(e.currentTarget.value), []);

    return (
        <div className={styles.pairedInput}>
            <Input
                value={newName}
                onChange={handleNameChange}
                className={
                    classnames(
                        styles.nameInput,
                        {
                            [styles.changed]: isNameChanged,
                        },
                    )
                }
            />

            <Input
                value={newValue}
                onChange={handleValueChange}
                className={
                    classnames(
                        styles.valueInput,
                        {
                            [styles.changed]: isValueChanged,
                        },
                    )
                }
            />

            {
                !isAdditional ?
                    <Button
                        onClick={() => deleteItem(name)}
                        className={styles.deleteButton}
                        styling='danger'
                    >
                        {'x'}
                    </Button> :
                    <Button
                        onClick={() => {
                            addItem(newName, newValue);
                            setValue('');
                            setName('');
                        }}
                        className={styles.deleteButton}
                    >
                        {'Добавить'}
                    </Button>
            }
        </div>
    );
};

export default React.memo(PairedInput);
