const style = {
  backgroundImage: "linear-gradient(to bottom right, rgba(29, 119, 215, 0.7) , rgba(29, 119, 215, 0.7) , rgba(186, 208, 231, 0.7))",
  width: "400px",
  height: "40px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  gap: "4px",
  display: "flex",
  boxShadow: "0 0 20px rgba(29, 119, 215, 0.7), 0 0 30px rgba(146, 156, 230, 0.3), 0 0 40px rgba(29, 119, 215, 0.7)"
};

export const InputTodo = (props) => {
    const { todoText, onChange, onClick, disabled } = props; 
    return (
    <div style={style}>
      <input disabled={disabled} placeholder='TODOを入力' value={todoText} onChange={onChange}/>
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
    );
};