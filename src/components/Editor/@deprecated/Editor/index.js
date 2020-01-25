import React from 'react';
import withDirHistory from '@/containers/withDirHistory';
import {Preloader} from '@/uicomponents';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import classnames from 'classnames';

import styles from './styles.less';
import EditorPath from './EditorPath';
import EditorPanel from './EditorPanel';
import Controls from './EditorControls';
import EditorModal from './EditorModal';
import {useModalState} from './hooks/useModalState';
import {useSelectedItem} from './hooks/useSelectedItem';

const Editor = ({
    dirHistory,
    pushHistory,
    popHistory,
    moveHistory,
    isLoaded,
}) => {
    const {
        isModalOpened,
        openModal,
        closeModal
    } = useModalState();

    const {
        selectItem,
        itemType,
        itemId,
    } = useSelectedItem(); 

    const handleModalOpen = (id, type) => {
        console.log(id, type);
        selectItem(id, type);
        openModal();
    };

    if (!isLoaded) {
        return (
            <div className={
                classnames(
                    styles.editor,
                    styles.notLoaded,
                )
            }>
                <Preloader />
            </div>
        );
    }

    return (
        <div className={styles.editor}>
            <EditorPath
                dirHistory={dirHistory}
                sliceHistory={moveHistory}
            />
            <EditorPanel
                openModal={handleModalOpen}
                dirHistory={dirHistory}
                pushDirHistory={pushHistory} 
            />

            <Controls
                dirHistory={dirHistory}
                popHistory={popHistory}
            />

            <EditorModal
                closeModal={closeModal}
                isOpen={isModalOpened}
                itemId={itemId}
                itemType={itemType}
            />
        </div>
    );
}


const mapStateToProps = ({template}) => ({
    isLoaded: template.isLoaded,
});

export default compose(
    withDirHistory,
    connect(mapStateToProps),
)(React.memo(Editor));