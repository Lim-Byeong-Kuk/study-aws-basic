import { ClipLoader } from "react-spinners";
import { createBrowserRouter } from "react-router-dom";
import ListComponent from "../components/ListComponent";

const root = createBrowserRouter([
  {
    path: "",
    element: <ListComponent></ListComponent>,
  },
]);

export default root;
