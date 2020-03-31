import {useReducer} from 'react';

export const useSectionsState = defaultState => {
    const reducer = (state, action) => {
        const {type, payload} = action;
        switch (type) {

        case 'DELETE_SECTION': {
            const {sectionName} = payload;
            const sectionsCopy = {...state};
            delete sectionsCopy[sectionName];

            return sectionsCopy;
        }
        case 'ADD_SECTION': {
            const {sectionName} = payload;

            return {
                ...state,
                [sectionName]: {},
            };
        }

        case 'DELETE_FIELD': {
            const {
                sectionName,
                name,
            } = payload;

            const sectionCopy = {...state[sectionName]};
            delete sectionCopy[name];

            return {
                ...state,
                [sectionName]: sectionCopy,
            };
        }
        case 'ADD_FIELD': {
            const {
                sectionName,
                name,
                value,
            } = payload;

            return {
                ...state,
                [sectionName]: {
                    ...state[sectionName],
                    [name]: value,
                },
            };
        }
        default: {
            return state;
        }
        }
    };

    const [state, dispatch] = useReducer(reducer, defaultState);

    const deleteSection = sectionName => dispatch({type: 'DELETE_SECTION', payload: {sectionName}});
    const addSection = sectionName => dispatch({type: 'ADD_SECTION', payload: {sectionName}});
    const addItem = (sectionName, name, value) => dispatch({type: 'ADD_FIELD', payload: {sectionName, name, value}});
    const deleteItem = (sectionName, name) => dispatch({type: 'DELETE_FIELD', payload: {sectionName, name}});

    return {
        state,
        deleteSection,
        addSection,
        addItem,
        deleteItem,
    };
};
