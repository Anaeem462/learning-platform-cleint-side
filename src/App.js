import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Router/Router";
import { ToastContainer } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer position="top-center" />
      <Player></Player>
    </div>
  );
}

export default App;
