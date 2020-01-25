import React, {useRef} from 'react';
import styles from './styles.less';


const Preloader = () => (
        <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className={styles.path}
                d="M60 10L110 95L10 95z"
                stroke="black"
                strokeWidth="10"
            />
        </svg>
    );

export default Preloader;