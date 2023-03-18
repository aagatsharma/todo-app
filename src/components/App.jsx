import { useState } from "react";
import { NavBar } from ".";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  function displayText() {
    const newtodo = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      newtask: task,
      complete: false,
    };
    setTodo(newtodo.newtask === "" ? todo : [...todo, newtodo]);
    setTask("");
  }

  function storeText(event) {
    setTask(event.target.value);
  }

  function deleteTask(id) {
    setTodo(todo.filter((taskName) => taskName.id !== id));
  }
  function completeTask(id) {
    const completedtask = todo.map((task) =>
      id === task.id ? { ...task, complete: !task.complete } : task
    );
    setTodo(completedtask);
  }
  return (
    <div>
      <NavBar />
      <div className="w-2/4 m-auto">
        <div className="mt-10 flex flex-wrap gap-7">
          <input
            className="basis-4/5 border border-solid border-black p-3 text-4xl w-2/5"
            onChange={storeText}
            placeholder="Enter your task.."
            value={task}
          />

          <button
            className="basis-1/6 bg-gray-600 text-white p-4 rounded-md"
            onClick={displayText}
          >
            Add Task
          </button>

          {todo.map((task) => {
            return (
              <div
                className={`flex gap-5 mt-5 basis-full justify-between items-center ${
                  task.complete ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                <h1 className="text-5xl px-5">{task.newtask}</h1>
                <div className="flex gap-1">
                  <button
                    className="bg-gray-600 text-white p-4 rounded-md"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>

                  <button
                    className="bg-gray-600 p-4 text-white rounded-md"
                    onClick={() => {
                      completeTask(task.id);
                    }}
                  >
                    {task.complete ? "Not Completed" : "Completed"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
