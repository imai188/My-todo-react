export const CompleteTodos = (props) => {
    const { todos, onClickBack } = props;//分割代入でpropsを取り出す
    return (
    <div className='complete-area'>
    <p className='title'>完了のTodo</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className='list-row'>
              <p className='todo-item'>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    );
};