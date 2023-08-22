import AnimatedComponents from "../animations/AnimatedComponents";
import Title from "../utils/Title";
import { useState, useEffect } from "react";
import TodolistCard from "./TodolistCard";
import NewTaskForm from "./forms/NewTaskForm";
import toast from "react-hot-toast";
import { v4 as uuid } from 'uuid';

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
    const storedTodos = JSON.parse(localStorage.getItem("todos") ?? "[]");

    if (Array.isArray(storedTodos)) {
      setTodos(storedTodos);
    }
  }, []);

  const handleClick = () => {
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

  return (
    <AnimatedComponents>
      <div
        id="SimpleTodolist"
        className={`flex flex-col items-center justify-center py-20 ${
          todos.length <= 2 ? "h-screen" : "md:h-screen lg:h-screen xl:h-screen"
        }`}
      >
        <Title>Todo List</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
          {todos.map((todo) => (
            <TodolistCard
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
              id={todo.id}
              title={todo.title}
              content={todo.content}
              completed={todo.completed}
            ></TodolistCard>
          ))}
          <NewTaskForm
            ButtonCloseText="Add"
            ButtonText="Add task"
            setTitle={setTitle}
            setContent={setContent}
            handleClick={handleClick}
          />
        </div>
      </div>
    </AnimatedComponents>
  );
}

export default SimpleTodolist;
