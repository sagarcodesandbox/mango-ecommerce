import React, { lazy } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
const CategoryPage = lazy(() => import("../pages/category/Categorypage"));
// import CategoryPage from "../pages/category/Categorypage";
const ShopPage = lazy(() => import("../pages/shop/ShopPage"));
// import ShopPage from "../pages/shop/ShopPage";
const SingleProduct = lazy(()=> ("../pages/shop/productDetails/SingleProduct")) ;
// import SingleProduct from "../pages/shop/productDetails/SingleProduct";
import Search from "../components/Search";
import Login from "../components/Login";
import Register from "../components/Register"

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: "/categories/:categoryName", element: <CategoryPage />
                },
                { path: "/search", element: <Search /> },
                { path: "/shop", element: <ShopPage /> },
                { path: "/shop/:id", element: <SingleProduct /> },
            ]
        },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
])

export default router;

