import React, { useContext } from 'react';

import { Redirect } from 'react-router-dom';

import NavigationUrls from '../routers/NavigationUrls';
import { BlogEntriesContext } from '../store/BlogEntriesContext';
import BlogForm from './BlogForm';
import Footer from './Footer';
import Header from './Header';

const AddBlogPage = () => {
  const {
    addBlogEntry,
    isAdding,
    errorOnAdd,
    newBlogEntry,
  } = useContext(BlogEntriesContext);

  const onAddBlogHandler = (newBlog) => {
    addBlogEntry(newBlog);
  };

  // redirect to BlogPage after successful saving
  if (newBlogEntry) {
    return <Redirect to={NavigationUrls.blogPageUrl} />;
  }

  return (
    <>
      <Header />
      <h3> Create new blog </h3>
      <BlogForm isProcessing={isAdding} onSubmit={onAddBlogHandler} />
      {errorOnAdd && <p>{errorOnAdd}</p>}
      <Footer />
    </>
  );
};

export default AddBlogPage;
