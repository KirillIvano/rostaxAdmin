import React from 'react';
import classnames from 'classnames';

import {Preloader} from '@/uicomponents';
import {EditorPath} from './components';
import {withLoadingState, withModals} from './containers'
import styles from './styles.less';

const Editor = ({
    isLoaded,
    openDeleteModal,
}) => {
    if (!isLoaded) {
        return (
            <div className={classnames(
                styles.editor,
                styles.notLoaded
            )}>
                <Preloader />
            </div>
        );
    }
    
    return (
        <>
            <button onClick={openDeleteModal}></button>
        </>
    );
};

export default withLoadingState(withModals(Editor));