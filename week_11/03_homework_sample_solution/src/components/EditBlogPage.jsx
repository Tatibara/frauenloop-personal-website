import React, { useEffect } from 'react';

import useHttp from '../hooks/useHttp';
import NavigationUrls from '../routers/NavigationUrls';
import database from '../services/firebase';
import BlogForm from './BlogForm';
import Footer from './Footer';
import Header from './Header';

const EditBlogPage = ({ match, history }) => {
  const { httpState: { error, isLoading, data: blogEntries }, getBlockEntries } = useHttp();
  let blogEntry = null;

  useEffect(() => {
    getBlockEntries();
  }, [getBlockEntries]);

  if (blogEntries) {
    blogEntry = blogEntries.find((blog) => blog.id === match.params.id);
  }

  const onEditBlogHandler = (updatedBlog) => {
    if (blogEntry) {
      database
        .ref(`blogs/${blogEntry.id}`)
        .update({ ...updatedBlog, updatedAt: new Date().getTime() })
        .then(() => {
          console.log('updated successful with key: ', blogEntry.id);
          history.push(NavigationUrls.blogPageUrl);
        }).catch((e) => {
          console.log('Error saving data', e.message);
        });
    }
  };

  const onDeleteBlogHandler = () => {
    if (blogEntry) {
      database
        .ref(`blogs/${blogEntry.id}`)
        .remove()
        .then(() => {
          console.log('deleted successful with key: ', blogEntry.id);
          history.push(NavigationUrls.blogPageUrl);
        }).catch((e) => {
          console.log('Error deleting data', e.message);
        });
    }
  };

  return (
    <>
      <Header />
      <h3> Edit blog </h3>
      {isLoading ? <p>Loading...</p>
        : !error && blogEntry && (
        <>
          <button type="button" onClick={onDeleteBlogHandler}>Delete</button>
          <BlogForm onSubmit={onEditBlogHandler} blogEntry={blogEntry} />
        </>
        ) }
      {error && <p>{error}</p>}

      <Footer />
    </>
  );
};

export default EditBlogPage;
