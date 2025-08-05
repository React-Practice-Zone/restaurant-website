import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./pages/Meals";
import Home from "./pages/Home";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
