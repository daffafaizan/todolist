import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";

function EditTaskForm({
  ButtonCloseText,
  todo,
  handleEdit,
}: {
  ButtonCloseText: string;
  todo: any;
  handleEdit: any;
}) {
  let [isOpen, setIsOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(todo["title"]);
  const [newContent, setNewContent] = useState(todo["content"]);

  const handleChanges = () => {
    handleEdit(todo.id, newTitle, newContent, todo.completed);
    closeModal();
  };

  function closeModal() {
    setNewTitle(todo["title"]);
    setNewContent(todo["content"]);
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="text-gray-500 hover:text-gray-300 cursor-pointer hover:scale-125 duration-300 ml-3"
        >
          <Icon icon="fa6-solid:pen" className="h-4 w-4" />
        </button>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Edit task
                  </Dialog.Title>

                  <button
                    className="fixed right-0 top-0 text-4xl text-cyan-600 hover:scale-110 duration-300 border-2 border-transparent p-4 rounded-full items-center cursor-pointer"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="block h-9 w-9" aria-hidden="true" />
                  </button>

                  <div className="mt-6 text-sm text-gray-500">
                    <form>
                      <div className="">
                        <input
                          type="text"
                          className="h-2 w-full p-5 bg-white border-2 rounded-md focus:shadow-outline focus:outline-none text-stone-800"
                          placeholder={todo.title}
                          name="taskName"
                          onChange={(e) => setNewTitle(e.currentTarget.value)}
                        ></input>
                      </div>
                      <div className="">
                        <textarea
                          className="w-full p-5 mt-3 bg-white border-2 rounded-md focus:shadow-outline focus:outline-none text-stone-800"
                          rows={4}
                          placeholder={todo.content}
                          name="description"
                          onChange={(e) => setNewContent(e.currentTarget.value)}
                        ></textarea>
                      </div>
                    </form>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        handleChanges();
                        closeModal();
                      }}
                    >
                      {ButtonCloseText}
                    </button>
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

export default EditTaskForm;
