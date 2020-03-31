import {useReducer} from 'react';

export const useSectionsState = defaultState => {
    const reducer = (state, action) => {
        const {type, payload} = action;
        switch (type) {
        case 'RESET': {
            const {newState} = payload;

            return newState;
        }
        case 'DELETE_SECTION': {
            const {sectionName} = payload;

            return state.filter(({name}) => name !== sectionName);
        }
        case 'ADD_SECTION': {
            const {sectionName} = payload;

            return [
                ...state,
                {name: sectionName, items: []},
            ];
        }
        case 'DELETE_FIELD': {
            const {
                sectionName,
                fieldName,
            } = payload;
            const stateCopy = [...state];
            const sectionInd = stateCopy.findIndex(({name}) => name === sectionName);
            const section = stateCopy[sectionInd];

            const sectionCopy = {
                ...section,
                items: section.items.filter(({name}) => fieldName !== name),
            };

            stateCopy[sectionInd] = sectionCopy;

            return stateCopy;
        }
        case 'ADD_FIELD': {
            const {
                sectionName,
                fieldName,
                value,
            } = payload;
            const stateCopy = [...state];

            const sectionInd = stateCopy.findIndex(({name}) => name === sectionName);
            const sectionCopy = {...stateCopy[sectionInd]};

            sectionCopy.items = [...sectionCopy.items, {name: fieldName, value}];

            stateCopy[sectionInd] = sectionCopy;

            return stateCopy;
        }
        default: {
            return state;
        }
        }
    };

    const [state, dispatch] = useReducer(reducer, defaultState);

    const deleteSection = sectionName => dispatch({type: 'DELETE_SECTION', payload: {sectionName}});
    const addSection = sectionName => dispatch({type: 'ADD_SECTION', payload: {sectionName}});
    const deleteItem = (sectionName, name) => dispatch({type: 'DELETE_FIELD', payload: {sectionName, fieldName: name}});
    const addItem = (sectionName, name, value) => dispatch({type: 'ADD_FIELD', payload: {sectionName, fieldName: name, value}});
    const resetState = newState => dispatch({type: 'RESET', payload: {newState}});

    return {
        state,
        deleteSection,
        addSection,
        addItem,
        deleteItem,
        resetState,
    };
};
