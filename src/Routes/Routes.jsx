import React from 'react';

import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
        {
            index:true ,
            path:'/' ,
            loader: () => fetch('booksData.json'), 
            element:<Home/>}
    ]
  },
]);