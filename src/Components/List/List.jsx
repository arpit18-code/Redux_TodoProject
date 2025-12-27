let List = ({
  Todo,
  id,
  edit,
  setEdit,
  handleRemoveTodo,
  handleEditAndConfirm,
  setInput,
  dispatch,
  CheckTodo,
  setEditedListText,
}) => {
  return (
    <div className="flex justify-center items-center">
      <input
        id={id}
        type="checkbox"
        onChange={() => dispatch(CheckTodo(Todo))}
        className="h-4 w-4 cursor-pointer"
        checked={Todo.IsCompleted}
      />
      <label htmlFor={id}>
        {edit ? (
          <input
            type="text"
            className="border w-auto my-1 p-2 h-8"
            onChange={(e) => setEditedListText(e.target.value)}
          />
        ) : (
          <p
            className="border my-1 p-2 h-auto mx-1 flex items-center cursor-pointer"
            style={{
              textDecoration: Todo.IsCompleted ? "Line-through" : "none",
            }}
          >
            {Todo.Text}
          </p>
        )}
      </label>

      {edit ? (
        <button
          className="bg-black text-white p-1 rounded h-8 hover:bg-gray-800 cursor-pointer active:scale-95 mx-1"
          onClick={() => handleEditAndConfirm(Todo)}
        >
          Done
        </button>
      ) : (
        <button
          className="bg-black text-white p-1 rounded h-8 hover:bg-gray-800 cursor-pointer active:scale-95 mx-1"
          onClick={() => setEdit((edit) => !edit)}
        >
          Edit
        </button>
      )}

      <button
        className="bg-black text-white p-1 rounded h-8 hover:bg-gray-800 cursor-pointer active:scale-95"
        onClick={() => handleRemoveTodo(Todo)}
      >
        Delete
      </button>
    </div>
  );
};

export default List;
