import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from './LayOuts/HomeLayout.jsx';
import Home from './components/Home.jsx';
import Apps from './Page/Apps.jsx';
import Installation from './Page/Installation.jsx';
import AppDetails from './Page/AppDetails.jsx';
import ErrorPage from './Page/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout> </HomeLayout>,
    children: [
      {
        path: '/',
        element: <Home> </Home>,
        loader: () => fetch ('/AppsData.json')
      },
      {
        path: "/apps",
        element: <Apps> </Apps>,
        loader: () => fetch('/AppsData.json')
      },
      {
        path: "/installation",
        element: <Installation> </Installation>

      },
      {
        path:"/app/:id",
        element: <AppDetails> </AppDetails>,
        loader: () => fetch ('/AppsData.json')
      },
      {
        path: "*",
        element: <ErrorPage> </ErrorPage>
      }
  
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}> </RouterProvider>
  </StrictMode>,
)
