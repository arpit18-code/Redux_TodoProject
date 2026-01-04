import { useState } from "react";
import { AddTodo, RemoveTodo, EditTodo, CheckTodo } from "./Slices/TodoSlice";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import List from "./Components/List/list";

function App() {
  let [input, setInput] = useState("");
  let [EditedListText, setEditedListText] = useState("");
  let dispatch = useDispatch();

  let TodoArray = useSelector((state) => state.TodoArray);

  let handleAddToDo = () => {
    dispatch(AddTodo(input));
    setInput("");
  };

  let handleRemoveTodo = (Todo) => {
    dispatch(RemoveTodo(Todo));
  };

  let handleEditAndConfirm = (Todo) => {
    dispatch(
      EditTodo({
        id: Todo.id,
        EditedText: EditedListText,
      })
    );
    setInput("");
  };
  return (
    <>
      <div className="user-select-none">
        <div className="h-auto p-4 lg:w-120 sm:w-80 w-70 mx-auto my-2 border-2 text-center">
          <h2 className="text-2xl font-bold mt-0">Add your Todo</h2>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="border my-1 p-2 h-8"
            value={input}
          />
          <button
            className="bg-black text-white p-1 rounded h-8 hover:bg-gray-800 cursor-pointer active:scale-95"
            onClick={handleAddToDo}
          >
            Add
          </button>
        </div>

        <div className="h-auto p-4 lg:w-120 sm:w-80 w-70 mx-auto my-2 border-2 text-center user-select-none">
          {TodoArray?.map((Todo) => {
            let id = uuidv4();
            return (
              <List
                Todo={Todo}
                id={id}
                handleRemoveTodo={handleRemoveTodo}
                handleEditAndConfirm={handleEditAndConfirm}
                input={input}
                setInput={setInput}
                dispatch={dispatch}
                CheckTodo={CheckTodo}
                setEditedListText={setEditedListText}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
