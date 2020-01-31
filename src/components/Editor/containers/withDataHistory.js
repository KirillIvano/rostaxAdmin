import {
    compose,
    withStateHandlers,
} from 'recompose';

const moveDataHistory = ({dataHistory}) => id => ({
    dataHistory: dataHistory.slice(0, id),
});

const pushDataHistory = ({dataHistory}) =>
    part => ({
        dataHistory: [...dataHistory, part],
    });

export const withDataHistory = compose(
    withStateHandlers(
        {dataHistory: []},
        {
            moveDataHistory,
            pushDataHistory,
        },
    ),
);
