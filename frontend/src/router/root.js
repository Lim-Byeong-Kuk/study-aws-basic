import { ClipLoader } from "react-spinners";
import { createBrowserRouter } from "react-router-dom";
import ListComponent from "../components/ListComponent";
import AddComponent from "../components/AddComponent";

const root = createBrowserRouter([
  {
    path: "",
    element: <ListComponent></ListComponent>,
  },
  {
    path: "add",
    element: <AddComponent></AddComponent>,
  },
]);

export default root;
