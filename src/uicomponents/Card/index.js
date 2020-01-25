import React from 'react';
import styles from './styles.less';


const EditorCard = ({
    children,
    handleClick,
}) => (
        <div
            className={styles.editorCard}
            onClick={handleClick}
        >
            {children}
        </div>
    );

export default EditorCard;