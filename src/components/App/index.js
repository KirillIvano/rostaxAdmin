import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import Editor from '@/components/Editor';

import {withAppInit} from './containers';

const App = ({
    initApp,
}) => {
    useEffect(() => initApp(), []);

    return (
        <>
            <Route path={'/'} component={Editor} />
        </>
    );
};

export default withAppInit(App);