import React from 'react';
import {Modal} from '@/uicomponents';
import {connect} from 'react-redux';

import {addItemAction} from '@/redux/actions/template';

const DeleteItemModal = ({
    isOpen,
    close,
}) => {
    return <Modal {...{close, isOpen}}>xxx</Modal>;
};

const mapStateToProps = () => ({
    presentItem: 'lul',
});

const mapDispatchToProps = dispatch => ({
    addItem: (
        parentType,
        parentId,
    ) => dispatch(addItemAction()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeleteItemModal);
