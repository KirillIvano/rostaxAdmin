import React from 'react';

import {
    Button,
    ConfirmationModal,
} from '@/components';

import {useSectionsState} from './hooks/useSectionsState';
import {DescriptionSection} from './components';
import styles from './styles.less';
import mock from './mock';


const DescriptionForm = ({
    sections=mock,
}) => {

    const {
        state,
        deleteSection,
        addSection,
        addItem,
        deleteItem,
    } = useSectionsState(sections);

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                {
                    Object.entries(state).map(
                        ([name, items]) => (
                            <DescriptionSection
                                key={name}
                                {...{deleteSection, addItem, deleteItem, name, items}}
                            />
                        ),
                    )
                }
                <div className={styles.controlsSection}>
                    <Button onClick={addSection} className={styles.controlBtn}>
                        {'Новая категория'}
                    </Button>
                    <Button className={styles.controlBtn}>
                        {'К основным'}
                    </Button>
                    <Button className={styles.controlBtn}>
                        {'Сохранить'}
                    </Button>
                </div>
            </form>
            {/* <ConfirmationModal isOpen={true} /> */}
        </>
    );

};
export default DescriptionForm;
