import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Lesson from "../pages/Lesson";
import Excercise from "../pages/Excercise";

let router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/lesson/:id", element: <Lesson /> },
  { path: "/exercise/:id", element: <Excercise /> },
]);
export default router;
