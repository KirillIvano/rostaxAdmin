import React from 'react';

import styles from './styles.less';
import {useHistoryHanlders} from './../../hooks';

const PathPart = ({
    value,
    index,
    moveHistory,
}) => (
    <span
        className={styles.pathPart}
        onClick={() => moveHistory(index + 1)}
    >
        {value}
    </span>
);



const EditorPath = ({
    dataHistory,
    moveDataHistory,
}) => (
    <div className={styles.pathContainer}>
        {
            dataHistory.map(
                (value, index) =>
                    (<PathPart
                        key={index}
                        index={index}
                        moveHistory={moveDataHistory}
                        value={value}
                    />),
            )
        }
    </div>
);




export default EditorPath;
