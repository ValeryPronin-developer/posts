import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Posts} from "./pages/posts";
import {Root} from "./components/Root";
import {DetailPost} from "./pages/posts/detail";
import {AddPost} from "./pages/posts/add";
import {Auth} from "./pages/auth";
import {Registration} from "./pages/registration";
import {store} from './redux/store'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                index: true,
                element: <App/>
            },
            {
                path: 'posts',
                element: <Posts/>,
            },
            {
                path: 'posts/:id',
                element: <DetailPost/>
            },
            {
                path: 'posts/add',
                element: <AddPost/>
            },
            {
                path: 'auth',
                element: <Auth/>
            },
            {
                path: 'registration',
                element: <Registration/>
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
