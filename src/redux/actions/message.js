import {
    POP_MESSAGE,
    PUSH_MESSAGE,
} from '@/redux/names/message';

export const showMessage = (title, content) => ({
    type: PUSH_MESSAGE,
    payload: {
        message: {
            title,
            content,
        },
    },
});

export const removeLastMessage = () => ({
    type: POP_MESSAGE,
});
