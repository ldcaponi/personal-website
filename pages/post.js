import React from "react";
import allPosts from "../config/posts/allPosts.json";
import "./post.scss";
var showdown = require("showdown"),
  converter = new showdown.Converter();

class Post extends React.Component {
  render() {
    const { content, preview, title, date } = this.props.post;
    return (
      <div className="Post">
        <div className="markdown-body">
          <section className="Post_header">
            <div className="Post_title">{title}</div>
            <div className="Post_date">{date}</div>
          </section>
          <div
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(content)
            }}
          />
        </div>
      </div>
    );
  }
}

Post.getInitialProps = ({ query }) => {
  console.log(allPosts);
  return { post: allPosts[query.id] };
};

export default Post;
