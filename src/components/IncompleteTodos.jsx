export const IncompleteTodos = (props) => {
    const { todos, onClickComplete, onClickDelete } = props; //分割代入でpropsを取り出す
    return(
        <div className='incomplete-area'>
            <p className='title'>Incomplete Todo</p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <div className='list-row'>
                            <p className='todo-item'>{todo}</p>
                            <button onClick={() => onClickComplete(index)}>Done</button>
                            <button onClick={() => onClickDelete(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
    );
};