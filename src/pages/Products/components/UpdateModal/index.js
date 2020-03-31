import React, {
    useState,
} from 'react';
import classnames from 'classnames';

import {Modal} from '@/components';

import {withProductUpdating} from '../../containers/withProductUpdating';
import {DescriptionForm, MainPropsForm} from './components';
import styles from './styles.less';

const forms = {
    MAIN: 'main',
    DESCRIPTION: 'description',
};

const UpdateModal = ({
    isOpen,
    handleClose,
    categoryId,
    productId,
}) => {
    const [selectedForm, changeSelectedForm] = useState(forms.MAIN);

    return (
        <Modal
            isOpen={isOpen}
            close={handleClose}
        >
            <MainPropsForm
                {...{categoryId, productId}}
                changeForm={() => changeSelectedForm(forms.DESCRIPTION)}
                className={
                    classnames(
                        styles.form,
                        {[styles.hidden]: forms.MAIN !== selectedForm},
                    )
                }
            />
            <DescriptionForm
                {...{categoryId, productId}}
                changeForm={() => changeSelectedForm(forms.MAIN)}
                className={
                    classnames(
                        styles.form,
                        {[styles.hidden]: forms.DESCRIPTION !== selectedForm},
                    )
                }
            />
        </Modal>
    );
};

export default withProductUpdating(UpdateModal);
