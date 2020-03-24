import React, { useState } from 'react';

const BlogForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [fullText, setFullText] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      summary,
      fullText,
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
        value={fullText}
        onChange={(event) => setFullText(event.target.value)}
      />
      <br />
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default BlogForm;
