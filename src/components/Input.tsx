import React from 'react';
import '../styles/input.scss'

type InputProps = {
    id: string;
    labelName: string;
    placeholder: string;
    inputValue: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({id, labelName, placeholder, inputValue, onInputChange}: InputProps) => {
    return (
        <div>
            <label className='input_label'htmlFor={id}>{labelName}</label>
            <input className='input'
                    id={id}
                    type='text'
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={(event) => {onInputChange(event)}}/>
        </div>
    );
}