import React from 'react';
import '../styles/buttons.scss';


type ButtonProps = {
    onButtonClick: () => void;
    variant?: 'primary' | 'secondary';
    children?: string;
    
};

export const Button = ({onButtonClick, children, variant}: ButtonProps) => {
    return (
        <button className='button'
        onClick={() => {
            onButtonClick();
        }}
        >
            {children}
        </button>
    )
};