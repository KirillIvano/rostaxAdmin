import React from 'react';
import styles from './styles.less';


const Card = ({children}) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
};

export default Card;
