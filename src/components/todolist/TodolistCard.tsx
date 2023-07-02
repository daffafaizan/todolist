import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

function TodolistCard({
  todos,
  setTodos,
  id,
  title,
  content,
  completed,
}: {
  todos: any;
  setTodos: any;
  id: number;
  title: string;
  content: string;
  completed: boolean;
}) {
  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo: any) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    toast.success("Successfully deleted task");
  };

  const handleToggle = (id: number) => {
    setTodos((prevTodos: any) =>
      prevTodos.map((todo: any) => {
        if (todo.id === id) {
          const updatedTodo = { ...todo, completed: !todo.completed };
          if (updatedTodo.completed) {
            toast.success("Task finished!");
          }
          localStorage.setItem(
            "todos",
            JSON.stringify(
              prevTodos.map((t: any) => (t.id === id ? updatedTodo : t))
            )
          );
          return updatedTodo;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <div className="dark:text-white text-stone-900 w-full max-w-md flex flex-col rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-cyan-200 hover:dark:shadow-cyan-400 duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className="rounded-full w-4 h-4 border border-cyan-700 hover:scale-110 duration-300"
              onClick={() => handleToggle(id)}
              style={{ backgroundColor: completed ? "#0e7490" : "transparent" }}
            ></div>
            <div className="text-md font-bold">{title}</div>
          </div>
          <div className="flex items-center">
            <div
              className="text-gray-500 hover:text-gray-300 cursor-pointer ml-8"
              onClick={() => handleDelete(id)}
            >
              <Icon icon="fa6-solid:trash" className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="mt-4 text-gray-500 font-bold text-sm">{content}</div>
      </div>
    </>
  );
}

export default TodolistCard;
