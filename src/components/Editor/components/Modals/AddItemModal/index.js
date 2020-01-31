import React from 'react';
import {connect} from 'react-redux';

import {addItemAction} from '@/redux/actions/template';
import {Modal} from '@/uicomponents';

const AddItemModal = ({
    isOpen,
    close,

    addItem,
}) => {
    return <Modal {...{close, isOpen}}>
        <button onClick={addItem}></button>
    </Modal>;
};

const mapStateToProps = () => ({
    presentItem: 'lul',
});

const mapDispatchToProps = dispatch => ({
    addItem: (parentType, parentId) => dispatch(addItemAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemModal);
