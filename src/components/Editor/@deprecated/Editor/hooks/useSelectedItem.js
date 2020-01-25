import {useState} from 'react';


export const useSelectedItem = () => {
    const [itemId, setItemId] = useState(null);
    const [itemType, setType] = useState(null);

    const selectItem = (id, type) => {
        setItemId(id);
        setType(type);        
    };

    return {
        itemId,
        itemType,
        selectItem
    }
};