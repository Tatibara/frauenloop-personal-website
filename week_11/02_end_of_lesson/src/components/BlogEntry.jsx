import React from 'react';

const BlogEntry = ({ blogEntry }) => (
  <>
    <h4>{`Title: ${blogEntry.title}`}</h4>
    <p>{`Summary: ${blogEntry.summary}`}</p>
    <p>{`Body: ${blogEntry.body}`}</p>
    <p>{`Created at: ${new Date(blogEntry.createdAt).toLocaleDateString('en-US')}`}</p>
    <p>{blogEntry.updatedAt && `Updated at: ${new Date(blogEntry.updatedAt).toLocaleDateString('en-US')}`}</p>
  </>
);

export default BlogEntry;
