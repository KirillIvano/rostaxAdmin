import React from 'react';
import classnames from 'classnames';

import {Preloader} from '@/uicomponents';
import {withLocationContent} from './containers'
import styles from './styles.less';

const Editor = ({
    isLoaded,
    pathString,
}) => {
    if (!isLoaded) {
        return (
            <div className={classnames(styles.editor, styles.notLoaded)}>
                <Preloader />
            </div>
        );
    }
    
    return pathString;
};

export default withLocationContent(Editor);