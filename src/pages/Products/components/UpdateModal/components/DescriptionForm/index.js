import React, { useMemo, useEffect } from 'react';

import {
    Button,
} from '@/components';

import {withDescriptionUpating} from './containers/withDescriptionUpdating';
import {useSectionsState} from './hooks/useSectionsState';
import {DescriptionSection} from './components';
import styles from './styles.less';
import {ScrollWrapper} from './../../../';

const DescriptionForm = ({
    sections,
    updateDescription,
    className,
    changeForm,
    showErrorMessage,
}) => {
    const {
        state,
        resetState,
        deleteSection,
        addSection,
        addItem,
        deleteItem,
    } = useSectionsState(sections);

    useEffect(() => {
        resetState(sections);
    }, [sections]);

    const defaultItemsLen = useMemo(
        () => {
            return sections.map(section => section.items.length);
        },
        [sections],
    );
    const defaultSectionsCount = useMemo(() => sections.length, [sections]);

    const handleSave = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const elements = [...form.elements];

        // получаю все инпуты
        const inputs = elements.filter(el => el.tagName === 'INPUT');
        const itemsLengths = state.map(section => section.items.length);

        const inputsLen = inputs.length;

        // начальное состояние цикла
        let pos = 0;
        let sectionPos = 0;
        const result = [];

        while (pos < inputsLen - 1) {
            const sectionName = inputs[pos].value;
            if (!sectionName) {
                showErrorMessage('Сохранение', 'Имя секции не должно быть пустым');
                return;
            }

            pos++;

            const section = {name: sectionName, items: []};
            const sectionInputsCount = itemsLengths[sectionPos] * 2;

            // добавляем значимые инпуты
            for (let i = 0; i < sectionInputsCount; i += 2) {
                const name = inputs[pos + i].value;
                const value = inputs[pos + i + 1].value;
                if (!name || !value) {
                    showErrorMessage('Сохранение', 'Поле описания не должно быть пустым');
                    return;
                }

                section.items.push({name, value});
            }

            // отступ в 2 для пустых инпутов
            pos += sectionInputsCount + 2;

            result.push(section);
            sectionPos++;
        }

        updateDescription(result);
    };

    return (
        <>
            <form
                onSubmit={handleSave}
                className={className}
            >
                <p>
                    Описание
                </p>
                <ScrollWrapper>
                    {
                        state.map(
                            ({name, items}, index) => (
                                <DescriptionSection
                                    key={name}
                                    {...{
                                        deleteSection,
                                        addItem,
                                        deleteItem,
                                        name,
                                        items,
                                        defaultLen: defaultItemsLen[index],
                                        isNew: !(index < defaultSectionsCount),
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
                            name: '',
                            isAdditional: true,
                        }}
                    />
                </ScrollWrapper>
                <div className={styles.controlsSection}>
                    <Button
                        className={styles.controlBtn}
                        onClick={changeForm}
                    >
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
