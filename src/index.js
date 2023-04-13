import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Order from "./components/pages/Order/Order";
import products from "./mocks/products";
import MainPage from "./components/pages/MainPage/MainPage";
import NotFound from "./components/layout/NotFound";
import ScrollToTop from "./components/layout/ScrollToTop";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MainPage/>
      },
      {
        path: 'order',
        element: <Order products={products}/>
      },
      {
        path: '*',
        element: <NotFound/>
      },
    ]
  }])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


