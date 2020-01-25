import createAction from '@/redux/helpers/createAction';


export const SET_TEMPLATE = 'SET_TEMPLATE';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const ADD_VALUE = 'ADD_VALUE';
export const ADD_ITEM = 'ADD_ITEM';

export const setTemplateAction = createAction(SET_TEMPLATE);
export const deleteItemAction = createAction(DELETE_ITEM);
export const updateItemAction = createAction(UPDATE_ITEM);
export const addValueAction = createAction(ADD_VALUE);
export const addItemAction = createAction(ADD_ITEM);
