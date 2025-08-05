import Home from "./pages/Home";
import Meals from "./pages/Meals";
import RootLayout from "./pages/Root/Root";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/meals", element: <Meals /> },
    ],
  },
]);

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
