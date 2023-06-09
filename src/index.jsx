import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import {ThemeProvider, BaseStyles} from '@primer/react';

// components
import App from './App';
import Items, {loader} from '../src/components/items';
import Item, {loader as itemLoader} from '../src/components/item';
import EditItem from './components/edit-item';

// routes
import {create, edit, destroy} from './routes/item-routes';
import ErrorPage from './routes/error-page';

const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/items',
    element: <Items/>,
    errorElement: <ErrorPage/>,
    loader: loader,
    action: create,
    children: [
			{
				path: '/items/:itemId',
				element: <Item/>,
				loader: itemLoader,
			},
      {
        path: '/items/:itemId/edit',
        element: <EditItem/>,
        loader: itemLoader,
        action: edit
      },
			{
        path: '/items/:itemId/destroy',
        loader: itemLoader,
				action: destroy
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<ThemeProvider>
			<BaseStyles>
    		<RouterProvider router={router} />
			</BaseStyles>
		</ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
