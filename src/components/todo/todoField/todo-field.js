import {React, useRef, useState} from 'react'
import './todo-field.css';

const TodoField = () =>{

const [disabled, setDisabled] = useState(false)
const [fieldValue, setFieldValue] = useState('Помыть кота')
const inputRef = useRef(null);

const showInput = () =>{
    setDisabled(prev => !prev)
    setTimeout(() => {
        inputRef.current.focus()
    },100)
}

const changeField = (e) =>{
    setFieldValue(e.target.value)
}

const keyDownField = (e) =>{
    if(e.key === 'Enter'){
        inputRef.current.blur()
    }
}

return(
    <div className='fieldWraper'>
    {disabled?
        <input 
            value = {fieldValue} 
            className = 'toDoField' 
            onBlur = {() => setDisabled(prev =>!prev)} 
            onChange={changeField}
            onKeyDown={keyDownField}
            ref = {inputRef}
            
            
            
        />
        :
        
        <span className= "toDoPharagraph" onClick={showInput}>{fieldValue}</span>
    } 
        <button className='delBtn'>🗑️</button>
        <button className='complitedBtn'>✔️</button>
    </div>
)

}

export default TodoField