import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Router/Router";

function App() {
  return (
    <div className="App">
      {/* <h1>this is course client site</h1> */}
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
