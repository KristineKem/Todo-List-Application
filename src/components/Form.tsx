import React, { useState } from "react";
import {Todo} from '../TodoApp';
import { Input } from "./Input";
import { Button } from "./Button";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

type FormProps = {
    labelName: string;
    buttonName?: string;
    formValue: string;
    onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    
};

export const Form = ({labelName, buttonName, formValue, onFormSubmit, onInputChange}: FormProps) => {

    return (
        <form onSubmit={onFormSubmit}>
        <Input
            id={Math.random().toString()}
            labelName={labelName}
            inputValue={formValue}
            placeholder='Enter text'
            onInputChange={onInputChange}
        />
        <button className='simple_button' type='submit'>{buttonName}</button>
        </form>
    );
    
};