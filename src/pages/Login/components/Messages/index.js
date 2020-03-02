import React from 'react';

import {AppearingMessage} from '@/components';

const Messages = ({
    validationError,
    error,
}) => (
    <>
        <AppearingMessage
            styling='error'
        >
            {validationError}
        </AppearingMessage>
        <AppearingMessage
            styling='error'
        >
            {error}
        </AppearingMessage>
    </>
);

export default Messages;
