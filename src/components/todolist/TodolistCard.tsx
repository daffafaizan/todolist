import { Icon } from "@iconify/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import EditTaskForm from "./modals/EditTaskForm";
import toast from "react-hot-toast";

function TodolistCard({
  todo,
  todos,
  setTodos,
  handleEdit,
}: {
  todo: any;
  todos: any;
  setTodos: any;
  handleEdit: any;
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

  const handleToggle = (id: string) => {
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
      <div
        className="dark:text-white text-stone-900 w-60 h-60 max-w-md flex flex-col rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-cyan-200 hover:dark:shadow-cyan-400 duration-300"
        onClick={openModal}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className="rounded-full w-4 h-4 border border-cyan-700 hover:scale-125 duration-300"
              onClick={() => handleToggle(todo.id)}
              style={{
                backgroundColor: todo.completed ? "#0e7490" : "transparent",
              }}
            ></div>
            <div className="text-md font-bold">{todo.title}</div>
          </div>
          <div className="flex items-center">
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
        <div className="mt-4 text-gray-500 font-bold text-sm">
          {todo.content}
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
                <Dialog.Panel className="w-full aspect-square max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 mb-6 text-gray-900"
                  >
                    {todo.title}
                  </Dialog.Title> */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className="rounded-full w-4 h-4 border border-cyan-700 hover:scale-125 duration-300"
                      onClick={() => handleToggle(todo.id)}
                      style={{
                        backgroundColor: todo.completed
                          ? "#0e7490"
                          : "transparent",
                      }}
                    ></div>
                    <div className="text-md font-bold">{todo.title}</div>
                  </div>

                  <button
                    className="fixed right-0 top-0 text-4xl text-cyan-600 hover:scale-110 duration-300 border-2 border-transparent p-4 rounded-full items-center cursor-pointer"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="block h-9 w-9" aria-hidden="true" />
                  </button>

                  <div className="h-full p-3 text-sm text-gray-500 border-2 rounded-xl">
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
