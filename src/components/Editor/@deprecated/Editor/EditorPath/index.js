import React from 'react';

import styles from './styles.less';

const PathPart = ({value, index, sliceHistory}) => (
    <span
        className={styles.pathPart}
        onClick={() => sliceHistory(index + 1)}
    >
        {value}
    </span>
);

const EditorPath = ({dirHistory, sliceHistory}) => (
    <div className={styles.pathContainer}>
        {
            dirHistory.map(
                ({name}, index) => 
                    (<PathPart
                        key={index}
                        index={index}
                        sliceHistory={sliceHistory}
                        value={name}
                    />)
            )
        }
    </div>
);

export default EditorPath;