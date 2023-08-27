import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Icon } from "@iconify/react";

export default function PriorityDropdown({
  id,
  priority,
  handleSelectPriority,
}: {
  id: string;
  priority: string;
  handleSelectPriority: any;
}) {
  return (
    <>
      <Menu as="div" className="relative flex flex-col items-center text-left">
        <Menu.Button className={`text-gray-500 cursor-pointer hover:scale-125 duration-300 ml-8 ${priority === "High" ? "text-red-500" : priority === "Medium" ? "text-yellow-500" : "text-gray-500"}`}>
          <Icon icon="fa6-solid:flag" className="h-4 w-4" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-[#161616] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-cyan-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md dark:text-white px-2 py-2 text-sm`}
                    onClick={() => handleSelectPriority(id, "High")}
                  >
                    {active ? (
                      <HighActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <HighInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    High Priority
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-cyan-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md dark:text-white px-2 py-2 text-sm`}
                    onClick={() => handleSelectPriority(id, "Medium")}
                  >
                    {active ? (
                      <MediumActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MediumInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Medium Priority
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-cyan-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md dark:text-white px-2 py-2 text-sm`}
                    onClick={() => handleSelectPriority(id, "Low")}
                  >
                    {active ? (
                      <LowActiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <LowInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Low Priority
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

function HighInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
        fill="#ef4444"
        stroke="#ef4444"
        strokeWidth="2"
      />
    </svg>
  );
}

function HighActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
        fill="#ef4444"
        stroke="#ef4444"
        strokeWidth="2"
      />
    </svg>
  );
}

function MediumInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
        fill="#eab308"
        stroke="#eab308"
        strokeWidth="2"
      />
    </svg>
  );
}

function MediumActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
        fill="#eab308"
        stroke="#eab308"
        strokeWidth="2"
      />
    </svg>
  );
}

function LowInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
        fill="#6b7280"
        stroke="#6b7280"
        strokeWidth="2"
      />
    </svg>
  );
}

function LowActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
        fill="#6b7280"
        stroke="#6b7280"
        strokeWidth="2"
      />
    </svg>
  );
}
