import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from './LayOuts/HomeLayout.jsx';
import Home from './components/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout> </HomeLayout>,
    children: [
      {
        path: '/',
        element: <Home> </Home>,
        loader: () => fetch ('/AppsData.json')
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}> </RouterProvider>
  </StrictMode>,
)
