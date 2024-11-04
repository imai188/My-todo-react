export const CompleteTodos = (props) => {
    const { todos, onClickBack } = props;//分割代入でpropsを取り出す
    return (
    <div className='complete-area'>
    <p className='title'>Completed Todo</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className='list-row'>
              <p className='todo-item'>{todo}</p>
              <button onClick={() => onClickBack(index)}>Back</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    );
};