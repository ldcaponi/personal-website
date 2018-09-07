import React from "react";
import allPosts from "../config/posts/allPosts.json";

class Blog extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(allPosts).map(i => (
          <div>
            {allPosts[i].title} - {allPosts[i].preview}
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
