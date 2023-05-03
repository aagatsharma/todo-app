import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiTick, TiEdit } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

export default function PerformTask() {
  const [task, setTask] = useState("");
  const [editedTask, setEditedTask] = useState("");
  const [todo, setTodo] = useState([]);

  function addText() {
    const newtodo = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      newtask: task,
      complete: false,
      edit: false,
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
      id === task.id ? { ...task, complete: !task.complete } : task,
    );
    setTodo(completedtask);
  }

  function editTask(id) {
    console.log(todo);
    const editedtask = todo.map((task) =>
      id === task.id ? { ...task, edit: !task.edit } : task,
    );

    setTodo(editedtask);

    // console.log(editedtask);
  }

  function storeEditedTask(e) {
    setEditedTask(e.target.value);
  }

  const changeTodo = (id) => {
    const editedtask = todo.map((task) =>
      id === task.id
        ? { ...task, newtask: editedTask, edit: !task.edit }
        : task,
    );

    setTodo(editedtask);
  };

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
        <button className="ml-4 btn" onClick={addText}>
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
                {task.edit ? (
                  <div className="flex gap-3">
                    <input
                      className="input"
                      defaultValue={task.newtask}
                      onChange={storeEditedTask}
                    />
                    <button className="btn" onClick={() => changeTodo(task.id)}>
                      OK
                    </button>
                  </div>
                ) : (
                  <h1 className={`text-3xl ${task.complete && "line-through"}`}>
                    {task.newtask}
                  </h1>
                )}

                <div className="flex gap-4">
                  {/* Task Update */}
                  <button
                    className="btn"
                    onClick={() => {
                      completeTask(task.id);
                    }}
                  >
                    {task.complete ? <RxCross2 /> : <TiTick />}
                  </button>

                  {/* Edit task */}
                  <button className="btn" onClick={() => editTask(task.id)}>
                    <TiEdit />
                  </button>

                  {/* Delete Task */}
                  <button className="btn" onClick={() => deleteTask(task.id)}>
                    <RiDeleteBin6Line />
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
