// @flow

import React from 'react';
import type {Component} from 'react';

type HocsType<T> = [(Component<T>) => Component<T>];

export const compose = (...hocs: HocsType) =>
    Comp =>
        props => {
            const ResultComp = hocs.reverse().reduce((Acc, hoc) => hoc(Acc), Comp);
            return <ResultComp {...props} />;
        };
