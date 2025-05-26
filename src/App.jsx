import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Products from "./pages/home/Products";
import Recipes from "./pages/about/Recipes";
import Users from "./pages/contact/Users";
import Post from './pages/Post/Post';
import Login from './pages/Login/Login';
import Layout from './pages/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import ProductDetail from './pages/product-detail/ProductDetail';
import AboutDetail from './pages/About-detail/AboutDetail';
import UserDetail from './pages/User-detail/UserDetail';
import PostDetail from './pages/PostDetail/Post-Detail';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Products />} />
        <Route path='recipes' element={<Recipes />} />
        <Route path='users' element={<Users />} />
        <Route path='post' element={<Post />} />

        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/recipes/:id" element={<AboutDetail />} />

        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default App;
