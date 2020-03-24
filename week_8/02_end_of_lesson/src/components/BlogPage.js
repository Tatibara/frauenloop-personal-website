import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import blogEntries from "../data/blogEntries";

import BlogEntry from "./BlogEntry";

const BlogPage = () => (
  <>
    <Header />
    <h1> BlogPage </h1>
    {blogEntries.map(blogEntry => <BlogEntry blogEntry={blogEntry} />) 
    }
    <Footer />
  </>
);

export default BlogPage;
