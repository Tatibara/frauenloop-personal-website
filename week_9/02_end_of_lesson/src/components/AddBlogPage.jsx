import React from 'react';

import database from '../firebase/firebase';
import NavigationUrls from '../routers/NavigationUrls';
import BlogForm from './BlogForm';
import Footer from './Footer';
import Header from './Header';

const AddBlogPage = ({ history }) => {
  const onAddBlogHandler = (newBlog) => {
    database
      .ref('blogs')
      .push(newBlog)
      .then((ref) => {
        console.log('added successful with key: ', ref.key);
      });

    history.push(NavigationUrls.blogPageUrl);
  };
  return (
    <>
      <Header />
      <h3> Create new blog </h3>
      <BlogForm onSubmit={onAddBlogHandler} />
      <Footer />
    </>
  );
};

export default AddBlogPage;
