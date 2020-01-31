import React from 'react';
import {Modal} from '@/uicomponents';
import {connect} from 'react-redux';

import {updateItemAction} from '@/redux/actions/template';

const UpdateItemModal = ({
    isOpen,
    close,
}) => {
    return <Modal stroke="" {...{close, isOpen}}>вы уверены, что хотите удалить {'ento'}</Modal>
};

const mapStateToProps = () => ({
    presentItem: 'lul',
});

const mapDispatchToProps = dispatch => ({
    addItem: (type, id) => dispatch(updateItemAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItemModal);
