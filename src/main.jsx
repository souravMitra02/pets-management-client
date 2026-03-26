import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayouts from './layouts/MainLayouts.jsx';
import Home from './components/Home/Home.jsx';
import AddPets from './components/AddCoffe/AddPets.jsx';
import UpdatePets from './components/UpdatePets/UpdatePets.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        loader: ()=> fetch('http://localhost:3000/pets'),
        element: <Home />
      },
      {
        path: "/addPets",
        element:<AddPets/>
      },
      {
        path: "/updatePets",
        element:<UpdatePets/>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />,
  </StrictMode>,
)
