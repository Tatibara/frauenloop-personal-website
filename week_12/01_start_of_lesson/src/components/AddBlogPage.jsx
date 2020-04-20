import React from 'react';

import { Redirect } from 'react-router-dom';

import useHttp from '../hooks/useHttp';
import NavigationUrls from '../routers/NavigationUrls';
import BlogForm from './BlogForm';
import Footer from './Footer';
import Header from './Header';

const AddBlogPage = () => {
  const { httpState: { error, isLoading: isAdding, data }, addBlogEntry } = useHttp();

  const onAddBlogHandler = (newBlog) => {
    addBlogEntry(newBlog);
  };

  // redirect to BlogPage after successful saving
  if (data) {
    return <Redirect to={NavigationUrls.blogPageUrl} />;
  }

  return (
    <>
      <Header />
      <h3> Create new blog </h3>
      <BlogForm isProcessing={isAdding} onSubmit={onAddBlogHandler} />
      {error && <p>{error}</p>}
      <Footer />
    </>
  );
};

export default AddBlogPage;
