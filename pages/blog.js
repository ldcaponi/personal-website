import React from "react";
import "./blog.scss";
import allPosts from "../config/posts/allPosts.json";
import Heading from "../components/common/heading/Heading";
import Breadcrumb from "../components/common/breadcrumb/Breadcrumb";
import Article from "../components/common/wrappers/Article";
import BlogPostCard from "../components/common/cards/BlogPostCard";

class Blog extends React.Component {
  render() {
    return (
      <div className="BlogPage">
        <Article>
          <Breadcrumb items={[{ text: "Home", href: "/" }]} />
        </Article>
        <div className="Blog_header">
          <Heading>All Posts</Heading>
        </div>

        <div className="Blog">
          <div className="container">
            {Object.keys(allPosts)
              .reverse()
              .map(i => <BlogPostCard key={i} post={allPosts[i]} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
