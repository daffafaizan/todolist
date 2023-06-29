import Title from "./Title";
import { useState, useEffect } from "react";
import TodolistCard from "./TodolistCard";
import DialogForm from "./DialogForm";
import toast from "react-hot-toast";

interface item {
  id: number;
  title: string;
  content: string;
  completed: boolean;
}

function SimpleTodolist() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [todos, setTodos] = useState<item[]>([
  ]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  
    if (Array.isArray(storedTodos)) {
      setTodos(storedTodos);
    }
  }, []);

  const handleClick = () => {
    const newTodo: item = {
      id: Date.now(),
      title: title,
      content: content,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    toast.success("Task added!")
  };

  return (
      <div
        id="SimpleTodolist"
        className="flex flex-col items-center justify-center md:h-screen lg:h-screen xl:h-screen py-20"
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
        </div>
        <DialogForm
          ButtonCloseText="Add"
          ButtonText="Add task"
          setTitle={setTitle}
          setContent={setContent}
          handleClick={handleClick}
        />
      </div>
  );
};

export default SimpleTodolist;