// @flow

import {useEffect} from 'react';

type handlerType = () => any;

export const useDataLoadingStart = (handler: handlerType) => {
    useEffect(() => {handler();}, []);
};
