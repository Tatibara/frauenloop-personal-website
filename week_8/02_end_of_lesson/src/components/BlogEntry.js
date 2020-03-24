import React from 'react';

const BlogEntry = ({blogEntry}) => <>
<h4>{blogEntry.id}</h4>
<h2>{blogEntry.title}</h2>
<p>{blogEntry.body}</p>
</>;

export default BlogEntry;
