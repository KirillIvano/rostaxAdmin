import {createSelector} from 'reselect';


const selectDirChildren = createSelector(
    (template, {childrenType}) => template[childrenType],
    (_, {childrenIds}) => childrenIds,
    (state, childrenIds) => {
        const result = {};
        childrenIds.forEach(id => result[id] = state[id]);

        return result;
    },
);

export default selectDirChildren;