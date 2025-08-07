import Home from "./pages/Home/Home";
import Meals from "./pages/Meals/Meals";
import OrderOnline from "./pages/OrderOnline/OrderOnline";
import RootLayout from "./pages/Root/Root";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MealDetails from "./pages/MealDetails/MealDetails";
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
      { path: "/order-online", element: <OrderOnline /> },
      { path: "/meals/:mealId", element: <MealDetails /> },
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
