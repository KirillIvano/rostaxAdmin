import React from 'react';

import withDirectoryInfo from './containers/withDirectoryInfo';
import styles from './styles.less';
import EditorCards from './components/EditorCards';


const EditorPanel = ({
    content,
    nodeType,
    contentType,
    childrenNodeType,
    pushDirHistory,
    openModal,
}) => (
        <div className={styles.editorPanelContainer}>
            <div className={styles.editorPanel}>
                <EditorCards
                    content={content}
                    contentType={contentType}
                    childrenNodeType={childrenNodeType}
                    nodeType={nodeType}

                    openModal={openModal}
                    pushDirHistory={pushDirHistory}
                />
                <button className={styles.directoryActionButton}></button>
            </div>
        </div>
    );

export default withDirectoryInfo(EditorPanel);