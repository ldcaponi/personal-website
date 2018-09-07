import React from "react";
import allPosts from "../config/posts/allPosts.json";
var showdown = require("showdown"),
  converter = new showdown.Converter();

class Post extends React.Component {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(this.props.post.content)
        }}
      />
    );
  }
}

Post.getInitialProps = ({ query }) => {
  console.log(allPosts, query);
  return { post: allPosts[query.id] };
};

export default Post;
