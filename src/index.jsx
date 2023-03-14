import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Item from '../src/components/item';
import Items from '../src/components/items';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/items',
    element: <Items/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/items/:itemId',
        element: <Item/>,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
