import React from 'react';
import classnames from 'classnames';

import {Preloader} from '@/uicomponents';
import {EditorPath} from './components';
import {withEditorProps} from './containers';
import styles from './styles.less';

const Editor = ({
    isLoaded,
    openAddModal,
    dataHistory,
    pushHisztory,
}) => {
    if (!isLoaded) {
        return (
            <div className={classnames(
                styles.editor,
                styles.notLoaded,
            )}>
                <Preloader />
            </div>
        );
    }

    return (
        <>
            <button>Добавить</button>
        </>
    );
};

export default withEditorProps(Editor);
