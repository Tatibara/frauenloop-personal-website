import React, { useState } from 'react';

const BlogForm = ({ onSubmit, blogEntry, isProcessing }) => {
  const [title, setTitle] = useState((blogEntry && blogEntry.title) || '');
  const [summary, setSummary] = useState((blogEntry && blogEntry.summary) || '');
  const [body, setBody] = useState((blogEntry && blogEntry.body) || '');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      summary,
      body,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <textarea
        placeholder="Add a summary for your blog"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />
      <br />
      <textarea
        placeholder="Add a full text for your blog"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <br />
      <button disabled={isProcessing} type="submit">Save Blog</button>
    </form>
  );
};

export default BlogForm;
