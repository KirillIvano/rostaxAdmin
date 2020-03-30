import React, {useCallback} from 'react';

import {Button, Input} from '@/components';

import styles from './styles.less';
import {PairedInput} from '..';

const DescriptionSection = ({
    name,
    items,
    deleteSection,
    addItem,
    deleteItem,
}) => {
    const handleAddItem = useCallback((itemName, itemValue) => addItem(name, itemName, itemValue), [name]);
    const handleDeleteItem = useCallback(itemName => deleteItem(name, itemName), [name]);

    return (
        <div className={styles.descriptionSection}>
            <div className={styles.sectionHeadlineContainer}>
                <Input
                    defaultValue={name}
                    className={styles.sectionHeadline}
                />

                <Button
                    className={styles.deleteSectionBtn}
                    onClick={() => deleteSection(name)}
                    styling={'danger'}
                    type={'button'}
                >
                    {'удалить'}
                </Button>
            </div>

            {
                Object.entries(items).map(
                    ([name, value]) =>
                        (
                            <PairedInput
                                key={name}
                                name={name}
                                value={value}
                                deleteItem={handleDeleteItem}
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
