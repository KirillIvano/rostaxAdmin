import React, {useCallback, useState} from 'react';
import classnames from 'classnames';

import {Input, Button} from '@/components';

import styles from './styles.less';

const PairedInput = ({
    name,
    value,
    isAdditional=false,
    isNew,
    addItem,
    deleteItem,
}) => {
    const [newName, setName] = useState(name);
    const [newValue, setValue] = useState(value);

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
                            [styles.changed]: newName !== name || isNew,
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
                            [styles.changed]: newValue !== value || isNew,
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
                        disabled={!newName}
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
