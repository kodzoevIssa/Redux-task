import './todo.css'
import TodoField from './todoField/todo-field'
const TodoList = () =>{

    return (
        <div className ="todoWraper">
            <h1 className='title'>ToDoList</h1>
            <div className='addTodoWraper'>
                <input type='text' placeholder='What do you want to do?' className='addTodoField'/>
                <button className='addTodoBtn'>+</button>
            </div>
            
            <div className='todos'>
                <TodoField/>
                <TodoField/>
                <TodoField/>
            </div>
        </div>
    )

}

export default TodoList