import React from 'react';
import Modal from '@/uicomponents/Modal'

const EditorModal = ({
    isOpen=false,
    closeModal,
}) => {
    return (
        <Modal isOpen={isOpen}>
            <button onClick={closeModal}>ЗАКРЫТЬ ОКНО</button>
        </Modal>
    );
};

export default EditorModal;