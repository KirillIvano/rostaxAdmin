import React, {useCallback, useState} from 'react';

import {Button, Input} from '@/components';

import styles from './styles.less';
import {PairedInput} from '..';
import {useStateChange} from './../../hooks/useStateChange';

const DescriptionSection = ({
    name,
    deleteSection,
    addSection,
    addItem,
    deleteItem,

    items={},
    isAdditional=false,
    defaultLen=0,
}) => {
    const handleAddItem = useCallback((itemName, itemValue) => addItem(name, itemName, itemValue), [name]);
    const handleDeleteItem = useCallback(itemName => deleteItem(name, itemName), [name]);

    const [newName, setNewName] = useState(name);

    return (
        <div className={styles.descriptionSection}>
            <div className={styles.sectionHeadlineContainer}>
                <Input
                    className={styles.sectionHeadline}
                    onChange={e => setNewName(e.target.value)}
                    value={newName}
                />

                {
                    isAdditional ?
                        <Button
                            className={styles.deleteSectionBtn}
                            onClick={() => {
                                addSection(newName);
                                setNewName('');
                            }}
                        >
                            {'добавить'}
                        </Button> :
                        <Button
                            className={styles.deleteSectionBtn}
                            onClick={() => deleteSection(name)}
                            styling={'danger'}
                        >
                            {'удалить'}
                        </Button>
                }
            </div>

            {
                Object.entries(items).map(
                    ([name, value], index) =>
                        (
                            <PairedInput
                                key={name}
                                name={name}
                                value={value}
                                deleteItem={handleDeleteItem}
                                isNew={!(defaultLen > index)}
                            />
                        ),
                )
            }

            <PairedInput
                key={''}
                name={''}
                value={''}
                addItem={handleAddItem}
                isAdditional={true}
            />
        </div>
    );
};

export default DescriptionSection;
