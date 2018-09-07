const withSass = require("@zeit/next-sass");
const allPosts = require("./config/posts/allPosts.json");

module.exports = {
  exportPathMap: defaultPathMap => {
    const allBlogPosts = {};
    Object.keys(allPosts).forEach(i => {
      allBlogPosts[`/post/${i}`] = {
        page: "/post",
        query: { id: allPosts[i].slug }
      };
    });
    return {
      "/": { page: "/" },
      "/blog": { page: "/blog" },
      ...allBlogPosts
    };
  },
  ...withSass()
};
