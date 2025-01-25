import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Country } from './pages/Country';
import { AppLayout } from './components/Layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/country",
        element: <Country />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },
])

export const App = () => {
  return (<RouterProvider router={router}>
    <h1>Hello Samadhan</h1>
  </RouterProvider>);
}
