import { useState } from "react";

export default function PerformTask() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  function displaytext() {
    const newtodo = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      newtask: task,
      complete: false,
    };
    setTodo(newtodo.newtask === "" ? todo : [...todo, newtodo]);
    setTask("");
  }
  function storeText(e) {
    setTask(e.target.value);
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

  function editTask(id) {
    setTodo(todo.map);
  }
  return (
    <>
      <div className="pt-6 flex justify-center ">
        <input
          type="text"
          onChange={storeText}
          className="input w-1/4"
          value={task}
          placeholder="Enter your task..."
        />
        <button className="ml-4 btn" onClick={displaytext}>
          Add Task
        </button>
      </div>
      <div className="w-[900px] m-auto mt-10 ">
        {todo.map((task) => {
          return (
            <div className="flex justify-center items-center mb-8">
              <div
                className={`flex justify-between items-center ${
                  task.complete ? "bg-green-200" : "bg-sky-200"
                } w-full py-3 px-5 rounded-lg`}
              >
                <h1 className="text-3xl">{task.newtask}</h1>
                <div className="flex gap-4">
                  <button
                    className="btn"
                    onClick={() => {
                      editTask(task.id);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn"
                    onClick={() => {
                      completeTask(task.id);
                    }}
                  >
                    {task.complete ? "Not Completed" : "Completed"}
                  </button>
                  <button className="btn" onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
