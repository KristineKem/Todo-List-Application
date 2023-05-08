import { useState } from 'react';
import './styles/App.scss';
import { TodoItem } from './components/TodoItem';
import { Form } from './components/Form';

export type Todo = {
  title: string;
  id: string;
  isDone: boolean;
  description?: string;
};

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='container'>
      <h1 className='heading'>Todo List</h1>
      
      <Form 
        onFormSubmit={(event) => {
          event.preventDefault();
          const newTodo: Todo = {
            title: inputValue,
            id: Math.random().toString(),
            isDone: false,
          };          
          setTodos([...todos, newTodo]);          
          setInputValue("");
        }} 
        onInputChange={(event) => {
          setInputValue(event.target.value);
        }
        } formValue={inputValue}
        buttonName="Add Todo"
        labelName="Add Todo"
        /> 

      <div>
        <ul className='ul'>
          {todos.map((todo) => {
          return (
            <div>
            <TodoItem 
              todo={todo} 
              key={todo.id} 
              onCheckboxChange={() => {
              const newTodos = todos.map((todoItem) => {
                if (todoItem.id === todo.id) {
                  return {
                    ...todoItem,
                    isDone: !todoItem.isDone,
                  };
                }
                return todoItem;
              });
              setTodos(newTodos);
            }} 
            onEditButtonClick={(editedText) => {
               const newTodos = todos.map((newTodo) => {
                if(newTodo.id === todo.id) {
                  return {
                    ...newTodo,
                    title: editedText,
                  };
                }
                return newTodo;
              });
              setTodos(newTodos);
            }} 
            onDeleteButtonClick={(id) => {
              setTodos(todos.filter((todoItem) => todoItem.id !== id));
              }
            }              
            />
            </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


