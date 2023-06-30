import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NoPage from "./pages/NoPage.tsx";
import Todolist from "./pages/index.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route index element={<Todolist />}></Route>
          <Route path="/todolist" element={<Todolist/>}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
