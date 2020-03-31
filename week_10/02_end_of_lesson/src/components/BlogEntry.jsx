import React from 'react';

const BlogEntry = ({ blogEntry }) => (
  <>
    <h4>{blogEntry.title}</h4>
    <p>{blogEntry.body}</p>
  </>
);

export default BlogEntry;
