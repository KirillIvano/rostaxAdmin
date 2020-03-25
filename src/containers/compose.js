import React from 'react';

export const compose = (...hocs) =>
    Comp =>
        props => {
            const ResultComp = hocs.reverse().reduce((Acc, hoc) => hoc(Acc), Comp);
            return <ResultComp {...props} />;
        };
