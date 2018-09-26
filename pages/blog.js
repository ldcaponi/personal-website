import React from "react";
import ShadowCard from "../components/common/cards/ShadowCard";
import "./blog.scss";
import allPosts from "../config/posts/allPosts.json";
import Tag from "../components/common/cards/Tag";
import Heading from "../components/common/heading/Heading";
import Link from "next/link";
import Breadcrumb from "../components/common/breadcrumb/Breadcrumb";
import Article from "../components/common/wrappers/Article";

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Article>
          <Breadcrumb items={[{ text: "Home", href: "/" }]} />
        </Article>
        <div className="Blog_header">
          <Heading>Recent Posts</Heading>
        </div>

        <div className="Blog">
          <div className="Blog_post-list container">
            {Object.keys(allPosts)
              .reverse()
              .map(i => (
                <ShadowCard key={i}>
                  <div style={{ padding: 30 }}>
                    <h1>{allPosts[i].title}</h1>
                    <div className="Blog_item_body">
                      <p style={{ color: "#636c72" }}>
                        {allPosts[i].author} &#183; {allPosts[i].date}
                      </p>
                      <p>{allPosts[i].description}</p>
                      {allPosts[i].tags &&
                        allPosts[i].tags.map(t => <Tag key={t}>{t}</Tag>)}

                      <p>
                        <Link href={`/post/${allPosts[i].slug}`}>
                          <button className="button button-primary button-pill">
                            Read
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </ShadowCard>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
