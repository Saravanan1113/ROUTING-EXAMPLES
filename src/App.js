import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Toggle from "./components/Toggle";
import UseEffectHook from "./components/UseEffectHook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "toggle",
        element: <Toggle />,
      },
      {
        path: "useEffect",
        element: <UseEffectHook />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
