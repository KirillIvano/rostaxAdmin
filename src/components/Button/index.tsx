import React from 'react';
import classnames from 'classnames';
import styles from './styles.less';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className: string;
    styling?: 'normal' | 'danger' | 'success';
    disabled?: boolean,
};

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    styling='normal',
    disabled=false,

    ...props
}) => (
    // eslint-disable-next-line react/button-has-type
    <button
        type="button"
        {...props}

        disabled={disabled}
        className={
            classnames(
                styles.button,
                className,
                {
                    [styles.danger]: styling === 'danger',
                    [styles.normal]: styling === 'normal',
                    [styles.success]: styling === 'success',
                },
            )
        }
    >
        {children}
    </button>
);

const enchancedButton = React.memo(Button);

export default enchancedButton;
