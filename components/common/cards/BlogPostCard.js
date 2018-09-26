import React from "react";
import ShadowCard from "./ShadowCard";
import Link from "next/link";
import Tag from "./Tag";
import "./BlogPostCard.scss";

const BlogPostCard = ({ post }) => {
  return (
    <ShadowCard>
      <div style={{ padding: 30 }}>
        <h1>{post.title}</h1>
        <div className="Blog_item_body">
          <p style={{ color: "#636c72" }}>
            {post.author} &#183; {post.date}
          </p>
          <p>{post.description}</p>
          {post.tags && post.tags.map(t => <Tag key={t}>{t}</Tag>)}

          <p>
            <Link href={`/post/${post.slug}`}>
              <button className="button button-pill">Read</button>
            </Link>
          </p>
        </div>
      </div>
    </ShadowCard>
  );
};

export default BlogPostCard;
