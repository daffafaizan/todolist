import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HashLink as Link } from "react-router-hash-link";
import Dark from "./Dark";
import AnimatedUI from "./AnimatedUI";

function Sidebar({ navigation }) {
  const [showSidebar, setShowSidebar] = useState(false);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <AnimatedUI>
      {showSidebar ? (
        <button
          className="flex text-4xl text-cyan-500 hover:scale-110 duration-300 border-2 border-transparent p-2 rounded-full items-center cursor-pointer fixed left-10 top-8 xxxs:left-8 xxxs:top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <XMarkIcon className="block h-12 w-12" aria-hidden="true" />
        </button>
      ) : (
        <button
          className="fixed text-cyan-500 hover:scale-110 duration-300 border-2 border-transparent p-2 rounded-full z-30 flex items-center cursor-pointer left-10 xxxs:left-8 xxxs:top-6 top-8"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Bars3Icon className="block h-12 w-12" aria-hidden="true" />
        </button>
      )}
      <div className="flex text-4xl text-cyan-500 hover:scale-110 duration-300 border-2 border-transparent p-2 rounded-full items-center cursor-pointer fixed right-7 top-8 xxxs:right-7 xxxs:top-6 z-30">
        <Dark />
      </div>
      <div
        className={`top-0 right-0 w-[35vw] sm:w-[50vw] xxxs:w-[50vw] xxs:w-[50vw] bg-cyan-600 dark:bg-cyan-600 text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center flex-col text-center h-full my-3 mx-3 gap-6">
          <div className="flex flex-col text-xl font-semibold text-white gap-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth
                className={classNames(
                  item.current
                    ? "bg-cyan-900 shadow-lg dark:shadow-lg hover:scale-110 duration-300 rounded-md text-white"
                    : "text-gray-300 hover:scale-110 duration-300 hover:text-white shadow-lg dark:shadow-lg rounded-md px-8 py-6 xxs:px-4 xxs:py-4 xxxs:px-4 xxxs:py-4 text-lg font-medium",
                  "rounded-md px-8 py-6 xxs:px-4 xxs:py-4 xxxs:px-4 xxxs:py-4 text-lg font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AnimatedUI>
  );
}

export default Sidebar;
