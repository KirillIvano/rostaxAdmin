import React from 'react';
import Card from '@/uicomponents/Card';


const DataNodeCards = ({
    content,
    openModal,
}) => Object.keys(content).map(
        id => (
            <Card
                key={id}
                handleClick={openModal}
            >
                {content[id].name}
            </Card>
        )
    )



export default DataNodeCards;

