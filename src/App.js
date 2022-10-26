import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
