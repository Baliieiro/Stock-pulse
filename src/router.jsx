import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ItemsLayout from "./pages/items/ItemsLayout";
import ListItem from "./pages/items/ListItem";
import ShowItem from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";
import CreatedItem from "./pages/items/CreatedItem";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/items",
        element: <ItemsLayout />,
        children: [
          { index: true, element: <ListItem /> },
          { path: "new", element: <CreatedItem /> },
          { path: ":id", element: <ShowItem /> },
          { path: ":id/update", element: <UpdateItem /> },
        ],
      },
    ],
  },
]);

export default router;
