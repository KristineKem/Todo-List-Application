import {ChangeEvent, useState} from 'react';
import { Button } from './Button';
import {Todo} from '../TodoApp';
import { Form } from './Form';
import '../styles/item.scss';




type TodoItemProps = {
    todo: {
    title: string;
    isDone: boolean;
    id: string;
    };
    onCheckboxChange: () => void;
    onEditButtonClick: (text: string) => void;
    onDeleteButtonClick: (id: string) => void;
};
    

export const TodoItem = ({todo, onCheckboxChange, onEditButtonClick, onDeleteButtonClick}: TodoItemProps) => {
    const [editNotClicked, setEditClicked] = useState(false);
    const [newInputValue, setNewInputValue] = useState(todo.title);

    return (
        <div>       
        <li className='item'>  
        <span className='title'>{todo.title}</span> 
            {editNotClicked ? (
                <Form 
                    onFormSubmit={(event) => {
                        event.preventDefault();
                        onEditButtonClick(newInputValue);
                        setEditClicked(false);
                    }} 
                    formValue={newInputValue} 
                    onInputChange={(event) => {
                        setNewInputValue(event.target.value);
                    }}
                    buttonName={editNotClicked ? "Save" : "Edit"}
                    labelName='Edit Todo'
                />                
            ) : (
                <div className='item_content'>
                    <label className='done' htmlFor={todo.id}>
                        {todo.isDone ? "Done" : "Not Done"}
                        <input className='checkbox'
                            type="checkbox"
                            id={todo.id}
                            checked={todo.isDone}
                            onChange={() => {
                                onCheckboxChange();
                            }}
                        />
                    </label>
                    <Button onButtonClick = {() => {onDeleteButtonClick(todo.id)}}>Delete</Button>
                    <Button
                    variant={editNotClicked ? "secondary" : "primary"}
                    onButtonClick={() => {
                        setEditClicked(!editNotClicked);

                        if(editNotClicked) {
                            setNewInputValue(todo.title);
                        }
                    }}
                    >
                        {editNotClicked ? "Cancel" : "Edit"}
                    </Button>
                </div>
            )}
        </li>
        </div>
    );
};      
