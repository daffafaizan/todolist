import AnimatedComponents from "../animations/AnimatedComponents";
import Title from "../utils/Title";
import { useState, useEffect } from "react";
import TodolistCard from "./TodolistCard";
import NewTaskForm from "./components/NewTaskForm";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";

interface Todo {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  priority: string;
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
    if (title == "") {
      toast.error("Title cannot be empty!");
    } else {
      const newTodo: Todo = {
        id: uuid(),
        title: title,
        content: content,
        completed: false,
        priority: "Low"
      };
      setTodos([...todos, newTodo]);
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      toast.success("Task added!");
    }
  };

  const handleEditTodo = (
    id: string,
    title: string,
    content: string,
    completed: boolean,
    priority: string
  ) => {
    const todo = todos.find(todo => todo.id === id);
    let newTitle: string | undefined;
    let newContent: string | undefined;
    if (title == "") {
      if (content == "") {
        newTitle = todo?.title;
        newContent = todo?.content;
      } else {
        newTitle = todo?.title;
        newContent = content;
      }
    } else {
      if (content == "") {
        newTitle = title;
        newContent = todo?.content;
      } else {
        newTitle = title;
        newContent = content;
      }
    }

    const editedTodo = {
      id: id,
      title: newTitle,
      content: newContent,
      completed: completed,
      priority: priority
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

  const handleSelectPriority = (id: string, priority: string) => {
    setTodos((prevTodos: any) =>
      prevTodos.map((todo: any) => {
        if (todo.id === id) {
          const updatedTodo = { ...todo, priority: priority };
          toast.success(`Task set to ${priority} priority!`);
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
    <AnimatedComponents>
      <div
        id="SimpleTodolist"
        className="min-h-screen flex flex-col items-center justify-center py-20" 
      >
        <Title>Todo List</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {todos.map((todo) => (
            <TodolistCard
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              handleEdit={handleEditTodo}
              handleSelectPriority={handleSelectPriority}
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
