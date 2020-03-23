// @flow

import {
    POP_MESSAGE,
    PUSH_MESSAGE,
} from './names';

let messageId = 0;

const showMessage = (
    title: string,
    content: string,
    styling: string,
) => ({
    type: PUSH_MESSAGE,
    payload: {
        message: {
            id: ++messageId,
            title,
            content,
            styling,
        },
    },
});

export const showErrorMessage = (title: string, content: string) => showMessage(title, content, 'error');
export const showNormalMessage = (title: string, content: string) => showMessage(title, content, 'normal');

export const removeLastMessage = () => ({
    type: POP_MESSAGE,
});
