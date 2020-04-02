import React, {useCallback, useState} from 'react';
import classnames from 'classnames';

import {Button, Input} from '@/components';

import styles from './styles.less';
import {PairedInput} from '..';

const DescriptionSection = ({
    name,
    deleteSection,
    addSection,
    addItem,
    deleteItem,

    items=[],
    isAdditional=false,
    isNew=false,
    defaultLen=0,
}) => {
    const handleAddItem = useCallback((itemName, itemValue) => addItem(name, itemName, itemValue), [name]);
    const handleDeleteItem = useCallback(itemName => deleteItem(name, itemName), [name]);

    const [newName, setNewName] = useState(name);

    return (
        <div className={styles.descriptionSection}>
            <div className={styles.sectionHeadlineContainer}>
                <Input
                    className={
                        classnames(
                            styles.sectionHeadline,
                            {[styles.changed]: newName !== name || isNew},
                        )
                    }
                    onChange={e => setNewName(e.target.value)}
                    value={newName}
                />

                {
                    isAdditional ?
                        <Button
                            className={styles.deleteSectionBtn}
                            disabled={!newName}
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
                items.map(
                    ({name, value}, index) =>
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

            {!isAdditional && <PairedInput
                key={''}
                name={''}
                value={''}
                addItem={handleAddItem}
                isAdditional={true}
            />}
        </div>
    );
};

export default DescriptionSection;
