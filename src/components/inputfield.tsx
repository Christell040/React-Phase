
import React from 'react';

import './styles.css';

interface aProps{
    todo : string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleAdd:  (e : React.FormEvent) => void;
    
}


const InputField : React.FC<aProps>= ( { todo, setTodo, handleAdd } ) => {
    return (
        <form className='input' onSubmit={handleAdd}>
            <input 
            type="input"
            value = {todo}
            onChange={ (e) => setTodo(e.target.value) }

            placeholder='Enter your task' className='input_box' />
            <button className='submit_btn' type='submit' >Go</button>
    
        </form>
      )
};

export default InputField;
