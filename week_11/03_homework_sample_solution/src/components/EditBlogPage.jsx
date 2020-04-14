import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import useHttp from '../hooks/useHttp';
import NavigationUrls from '../routers/NavigationUrls';
import BlogForm from './BlogForm';
import Footer from './Footer';
import Header from './Header';

const EditBlogPage = ({ match }) => {
  const { httpState: { error, isLoading, data: blogEntries }, getBlockEntries } = useHttp();
  const {
    httpState: { error: errorOnDelete, isLoading: isDeleting, data: blogIdToDelete },
    deleteBlogEntry,
  } = useHttp();
  const {
    httpState: { error: errorOnUpdate, isLoading: isUpdating, data: blogIdToUpdate },
    updateBlogEntry,
  } = useHttp();

  let blogEntry = null;

  useEffect(() => {
    getBlockEntries();
  }, [getBlockEntries]);

  // redirect to BlogPage after successful deleting
  if (blogIdToDelete || blogIdToUpdate) {
    return <Redirect to={NavigationUrls.blogPageUrl} />;
  }

  if (blogEntries) {
    blogEntry = blogEntries.find((blog) => blog.id === match.params.id);
  }

  const onUpdateBlogHandler = (updatedBlog) => {
    if (blogEntry) {
      updateBlogEntry({ ...blogEntry, ...updatedBlog });
    }
  };

  const onDeleteBlogHandler = () => {
    if (blogEntry) {
      deleteBlogEntry(blogEntry.id);
    }
  };

  return (
    <>
      <Header />
      <h3> Edit blog </h3>
      {isLoading ? <p>Loading...</p>
        : !error && blogEntry && (
        <>
          <button disabled={isDeleting} type="button" onClick={onDeleteBlogHandler}>Delete</button>
          {errorOnDelete && <p>{errorOnDelete}</p>}
          <BlogForm isProcessing={isUpdating} onSubmit={onUpdateBlogHandler} blogEntry={blogEntry} />
          {errorOnUpdate && <p>{errorOnUpdate}</p>}
        </>
        )}
      {error && <p>{error}</p>}

      <Footer />
    </>
  );
};

export default EditBlogPage;
