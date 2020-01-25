import React from 'react';

import DirCards from './DirectoryCards';
import DataNodeCards from './DataNodeCards';

const EditorCards = ({
    content,
    contentType,
    childrenNodeType,
    pushDirHistory,
    openModal
}) => {
    switch (childrenNodeType) {
        case 'directory':
            return <DirCards
                contentType={contentType}
                content={content}
                pushDirHistory={pushDirHistory}
            />
        case 'data':
            return <DataNodeCards
                contentType={contentType}
                content={content}
                openModal={openModal}
            />
        default: {
            return null;
        }
    }
}

export default EditorCards;