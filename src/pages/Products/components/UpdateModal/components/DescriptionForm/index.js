import React, { useMemo } from 'react';

import {
    Button,
    ConfirmationModal,
} from '@/components';

import {withDescriptionUpating} from './containers/withDescriptionUpdating';
import {useSectionsState} from './hooks/useSectionsState';
import {DescriptionSection} from './components';
import styles from './styles.less';

const DescriptionForm = ({
    sections={},
    updateDescription,
}) => {
    const {
        state,
        deleteSection,
        addSection,
        addItem,
        deleteItem,
    } = useSectionsState(sections);

    const defaultItemsLen = useMemo(
        () => {
            return Object.values(sections).map(section => Object.keys(section).length);
        },
        [sections],
    );

    const handleSave = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const elements = [...form.elements];
        // получаю все инпуты
        const inputs = elements.filter(el => el.tagName === 'INPUT');
        const itemsLengths = Object.values(state).map(section => Object.keys(section).length);

        const inputsLen = inputs.length;

        // начальное состояние цикла
        let pos = 0;
        let sectionPos = 0;
        const result = {};

        // пока по всем инпутам не пройдёмся
        while (pos < inputsLen) {
            const sectionName = inputs[pos].value;
            pos++;

            const section = {};
            const sectionInputsCount = itemsLengths[sectionPos] * 2;

            // добавляем значимые инпуты
            for (let i = 0; i < sectionInputsCount; i += 2) {
                const name = inputs[pos + i].value;
                const value = inputs[pos + i + 1].value;

                section[name] = value;
            }

            // отступ в 2 для пустых инпутов
            pos += sectionInputsCount + 2;

            result[sectionName] = section;
            sectionPos++;
        }

        updateDescription(result);
    };

    return (
        <>
            <form
                onSubmit={handleSave}
            >
                <div className={styles.sections}>
                    {
                        Object.entries(state).map(
                            ([name, items], index) => (
                                <DescriptionSection
                                    key={name}
                                    {...{
                                        deleteSection,
                                        addItem,
                                        deleteItem,
                                        name,
                                        items,
                                        defaultLen: defaultItemsLen[index],
                                    }}
                                />
                            ),
                        )
                    }
                    <DescriptionSection
                        key={'Новая секция'}
                        {...{
                            deleteSection,
                            addSection,
                            addItem,
                            deleteItem,
                            name,
                            isAdditional: true,
                        }}
                    />
                </div>
                <div className={styles.controlsSection}>
                    <Button className={styles.controlBtn}>
                        {'К основным'}
                    </Button>
                    <Button type="submit" className={styles.controlBtn}>
                        {'Сохранить'}
                    </Button>
                </div>
            </form>
            {/* <ConfirmationModal isOpen={true} /> */}
        </>
    );
};

export default withDescriptionUpating(DescriptionForm);
