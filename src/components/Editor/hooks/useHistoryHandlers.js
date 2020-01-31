import {useMemo} from 'react';
import {
    useHistory,
} from 'react-router-dom';

const getHistoryArr = pathname => pathname.split('/').filter(part => Boolean(part));
const getPathNameWithIndex = (path, index) => `/${path.slice(0, index).join('/')}`; 

export const useHistoryHanlders = () => {
    const history = useHistory();

    const pathname = history.location.pathname;
    const path = useMemo(() => getHistoryArr(pathname), [pathname]);

    // const pushHistory = pathPart => history.push(`${pathname}/${pathPart}`); 
    const moveHistory = index => history.push(getPathNameWithIndex(path, index));
    // const popHistory = () => moveHistory(path.length - 1);

    return {
        path,
        // pushHistory,
        moveHistory,
        // popHistory,
    };
};