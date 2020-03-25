import {useEffect} from 'react';

export const useDataLoadingStart = handler => {
    useEffect(() => {handler();}, []);
};
