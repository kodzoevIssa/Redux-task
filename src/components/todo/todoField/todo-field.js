import { React, useRef, useState } from 'react';
import './todo-field.css';
import { useDispatch } from 'react-redux';

const TodoField = ({ text, id, status }) => {
    const [disabled, setDisabled] = useState(false);
    const [fieldValue, setFieldValue] = useState(text);
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const deleteTodo = () => {
        dispatch({ type: 'DELETE_TODO', id: id });
    };

    const changeStatus = () => {
        dispatch({ type: 'CHANGE_DONE', id: id });
    };

    const showInput = () => {
        setDisabled((prev) => !prev);
        setTimeout(() => {
            inputRef.current.focus();
        }, 100);
    };

    const changeField = (e) => {
        setFieldValue(e.target.value);
    };

    const keyDownField = (e) => {
        if (e.key === 'Enter') {
            inputRef.current.blur();
        }
    };

    return (
        <div className="fieldWraper">
            {disabled ? (
                <input
                    value={fieldValue}
                    className="toDoField"
                    onBlur={() => setDisabled((prev) => !prev)}
                    onChange={changeField}
                    onKeyDown={keyDownField}
                    ref={inputRef}
                />
            ) : (
                <span
                    className={`toDoPharagraph ${
                        status ? 'toDoPharagraphDone' : 'totoDoPharagraphActive'
                    }`}
                    onClick={showInput}
                >
                    {fieldValue}
                </span>
            )}
            <button className="delBtn" onClick={deleteTodo}>
                🗑️
            </button>
            <button className="complitedBtn" onClick={changeStatus}>
                ✔️
            </button>
        </div>
    );
};

export default TodoField;
