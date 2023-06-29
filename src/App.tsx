import SimpleTodolist from "./components/SimpleTodolist";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-[#F4F5F0] dark:bg-[#171717] text-stone-900 dark:text-[#EDEDED] min-h-screen font-inter scroll-smooth">
      <div className="max-w-6xl w-11/12 mx-auto">
        <Toaster />
        <SimpleTodolist />
      </div>
    </div>
  );
}

export default App;
