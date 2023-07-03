import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NoPage from "./pages/NoPage.tsx";
import Todolist from "./pages/index.tsx";
import CustomCursor from "./components/ui/CustomCursor.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <CustomCursor /> */}
        <Toaster />
        <Routes>
          <Route index element={<Todolist />}></Route>
          <Route path="/todolist" element={<Todolist />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
