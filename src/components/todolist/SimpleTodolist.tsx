import AnimatedComponents from "../animations/AnimatedComponents";
import Title from "../utils/Title";
import { useState, useEffect } from "react";
import TodolistCard from "./TodolistCard";
import NewTaskForm from "./forms/NewTaskForm";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";

interface Todo {
  id: string;
  title: string;
  content: string;
  completed: boolean;
}

function SimpleTodolist() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    //localStorage.clear() // Debug clear
    try {
      const storedTodos = JSON.parse(localStorage.getItem("todos") ?? "[]");
      if (Array.isArray(storedTodos)) {
        setTodos(storedTodos);
      }
    } catch (error) {
      console.error("Error parsing JSON from local storage:", error);
    }
  }, []);

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: uuid(),
      title: title,
      content: content,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    toast.success("Task added!");
  };

  const handleEditTodo = (
    id: string,
    title: string,
    content: string,
    completed: boolean
  ) => {
    const editedTodo = {
      id: id,
      title: title,
      content: content,
      completed: completed,
    };
    setTodos((prevState: any) =>
      prevState.map((todo: any) =>
        todo["id"] === editedTodo["id"] ? editedTodo : todo
      )
    );
    const updatedTodos = todos.map((todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    toast.success("Successfully edit todo!");
  };

  return (
    <AnimatedComponents>
      <div
        id="SimpleTodolist"
        className={`flex flex-col items-center justify-center py-20 ${
          todos.length <= 1 ? "h-screen" : "md:h-screen lg:h-screen xl:h-screen"
        }`}
      >
        <Title>Todo List</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
          {todos.map((todo) => (
            <TodolistCard
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              handleEdit={handleEditTodo}
            ></TodolistCard>
          ))}
          <NewTaskForm
            ButtonCloseText="Add"
            ButtonText="Add task"
            setTitle={setTitle}
            setContent={setContent}
            handleClick={handleAddTodo}
          />
        </div>
      </div>
    </AnimatedComponents>
  );
}

export default SimpleTodolist;
