import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router";
import ErrorPage from "../components/ErrorPage";
import App from "./App";
import "./styles/global.css"
import Contacts from "../components/Contacts";



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)


const router = createBrowserRouter([
        {path: '/', element: <App/>, errorElement: <ErrorPage/>},
        {path : "contacts", element : <Contacts/>}
])
root.render(<RouterProvider router={router}/>)