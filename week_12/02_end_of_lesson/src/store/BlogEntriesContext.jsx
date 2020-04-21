import React, {
  createContext,
  useCallback,
  useEffect,
} from 'react';

import useHttp from '../hooks/useHttp';

const BlogEntriesContext = createContext({
  blogEntries: [],
});
const { Provider } = BlogEntriesContext;

const BlogEntriesProvider = ({ children }) => {
  const { httpState: { error, isLoading, data: blogEntries }, getBlockEntries } = useHttp();

  const {
    httpState: { error: errorOnDelete, isLoading: isDeleting, data: blogIdToDelete },
    deleteBlogEntry: doDeleteBlogEntry, resetHttpState: resetDeleteHttpState,
  } = useHttp();
  const {
    httpState: { error: errorOnUpdate, isLoading: isUpdating, data: blogIdToUpdate },
    updateBlogEntry: doUpdateBlogEntry, resetHttpState: resetUpdateHttpState,
  } = useHttp();
  const {
    httpState: { error: errorOnAdd, isLoading: isAdding, data: newBlogEntry },
    addBlogEntry: doAddBlogEntry, resetHttpState: resetAddHttpState,
  } = useHttp();

  useEffect(() => {
    getBlockEntries();
  }, [getBlockEntries]);

  useEffect(() => {
    if (blogIdToDelete) {
      resetDeleteHttpState();
    }
    if (blogIdToUpdate) {
      resetUpdateHttpState();
    }
    if (newBlogEntry) {
      resetAddHttpState();
    }
  }, [blogIdToDelete, blogIdToUpdate, newBlogEntry, resetDeleteHttpState, resetUpdateHttpState, resetAddHttpState]);

  const deleteBlogEntry = useCallback((blogEntryId) => {
    doDeleteBlogEntry(blogEntryId);
    getBlockEntries();
  }, []);

  const updateBlogEntry = useCallback((blogEntry) => {
    doUpdateBlogEntry(blogEntry);
    getBlockEntries();
  }, []);

  const addBlogEntry = useCallback((blogEntry) => {
    doAddBlogEntry(blogEntry);
    getBlockEntries();
  }, []);

  return (
    <Provider
      value={{
        isLoading,
        error,
        blogEntries,
        deleteBlogEntry,
        isDeleting,
        errorOnDelete,
        blogIdToDelete,
        updateBlogEntry,
        isUpdating,
        errorOnUpdate,
        blogIdToUpdate,
        addBlogEntry,
        isAdding,
        errorOnAdd,
        newBlogEntry,
      }}
    >
      {children}
    </Provider>
  );
};

export { BlogEntriesProvider, BlogEntriesContext };
