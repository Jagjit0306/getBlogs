import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blogs from './Blogs.js'
import Blog from './Blog.js'
import New from './NewBlog.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App/>}>
          <Route index element={<Blogs />}/>
          <Route path="new" element={<New />}/>
          <Route path="blog" element={<Blog />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
