import React from 'react';
import Card from '@/uicomponents/Card';


const DirectoryCards = ({
    pushDirHistory,
    content,
    contentType
}) => (
    Object.keys(content).map(
        id => (
            <Card
                handleClick={
                    () => pushDirHistory({
                        name: content[id].name,
                        type: contentType,
                        id
                    })
                }
                key={id}
            >
                {content[id].name}
            </Card>
        )
    )
);

export default DirectoryCards;
