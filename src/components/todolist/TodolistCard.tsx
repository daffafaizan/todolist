import { Icon } from "@iconify/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import EditTaskForm from "./components/EditTaskForm";
import toast from "react-hot-toast";
import PriorityDropdown from "./components/PriorityDropdown";

function TodolistCard({
  todo,
  todos,
  setTodos,
  handleEdit,
  handleSelectPriority,
}: {
  todo: any;
  todos: any;
  setTodos: any;
  handleEdit: any;
  handleSelectPriority: any;
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleDelete = (id: string) => {
    const newTodos = todos.filter((todo: any) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    toast.success("Successfully deleted task");
  };

  const handleToggleCompleted = (id: string) => {
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
      <div className="dark:text-white text-stone-900 w-60 h-60 max-w-md flex flex-col rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-cyan-200 hover:dark:shadow-cyan-400 duration-300">
        <div className="flex items-center justify-between">
          <div
            className="rounded-full flex-shrink-0 mr-2 w-4 h-4 border border-cyan-700 hover:scale-125 duration-300"
            onClick={() => handleToggleCompleted(todo.id)}
            style={{
              backgroundColor: todo.completed ? "#0e7490" : "transparent",
            }}
          ></div>
          <div className="flex items-center space-x-4 mr-auto">
            <div className="text-md font-bold">{todo.title}</div>
          </div>
          <div className="flex items-center">
            <PriorityDropdown
              id={todo.id}
              priority={todo.priority}
              handleSelectPriority={handleSelectPriority}
            />
            <EditTaskForm
              ButtonCloseText="Edit"
              todo={todo}
              handleEdit={handleEdit}
            />
            <div
              className="text-gray-500 hover:text-gray-300 cursor-pointer hover:scale-125 duration-300 ml-3"
              onClick={() => handleDelete(todo.id)}
            >
              <Icon icon="fa6-solid:trash" className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div
          className="h-full mt-4 p-2 text-gray-500 cursor-pointer font-bold text-sm rounded-xl bg-[#edefe7] dark:bg-[#1b1b1b]"
          onClick={openModal}
        >
          {todo.content.length <= 220 ? (
            todo.content
          ) : (
            <div>
              {`${todo.content.substring(0, 130)}`}
              <a onClick={openModal} className="text-cyan-500 cursor-pointer">
                ...Read more
              </a>
            </div>
          )}
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full flex flex-col aspect-square max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`rounded-full w-5 h-5 border hover:scale-125 duration-300 ${
                        todo.priority === "High"
                          ? "border-red-500"
                          : todo.priority === "Medium"
                          ? "border-yellow-500"
                          : "border-gray-500"
                      }`}
                      onClick={() => handleToggleCompleted(todo.id)}
                      style={{
                        backgroundColor: todo.completed
                          ? todo.priority === "High"
                            ? "#ef4444"
                            : todo.priority === "Medium"
                            ? "#eab308"
                            : "#6b7280"
                          : "transparent",
                      }}
                    ></div>
                    <div className="text-lg font-bold">{todo.title}</div>
                  </div>

                  <button
                    className="fixed right-0 top-0 text-4xl text-cyan-600 hover:scale-110 duration-300 border-2 border-transparent outline-none focus:outline-none p-4 rounded-full items-center cursor-pointer"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="block h-9 w-9" aria-hidden="true" />
                  </button>

                  <div className="p-3 h-full text-sm text-gray-500 border-2 rounded-xl overflow-scroll">
                    {todo.content}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default TodolistCard;
