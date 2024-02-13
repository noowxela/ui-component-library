import React from 'react';
import './Button.scss';
// import './button.css';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * Is this the principal call to action on the page?
     */
    login?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({ primary = false, login = false, size = 'medium', backgroundColor, label, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    const mode2 = login ? 'storybook-button--login' : 'storybook-button--signup';
    return (
        <button type="button" className={['storybook-button', `storybook-button--${size}`, mode, mode2].join(' ')} style={{ backgroundColor }} {...props}>
            {label}
        </button>
    );
};

export default Button;
