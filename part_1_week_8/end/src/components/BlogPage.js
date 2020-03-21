import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import blogEntries from "../data/blogEntries";
import NavigationUrls from "../routers/NavigationUrls";

import BlogEntry from "./BlogEntry";

const BlogPage = () => (
  <>
    <Header />
    <h3> My Blog is Everything! </h3>
    {blogEntries.map(blogEntry => (
      <>
      <BlogEntry blogEntry={blogEntry} />
      <Link to={`${NavigationUrls.blogDetailPageUrl}/${blogEntry.id}`}>Read more</Link>
      <hr />
      </>
      )) 
    }
    <Footer />
  </>
);

export default BlogPage;
