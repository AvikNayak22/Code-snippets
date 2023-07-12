import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";
import Code from "./Code";

const Post = () => {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    import("../markdown/article.md").then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostContent(response))
        .catch((err) => console.error(err));
    });
  }, []);

  return (
    <article className="article">
      <div className="container">
        <div className="post-wrapper">
          {/* <h1>Posts</h1> */}

          <Markdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                },
              },
            }}
          >
            {postContent}
          </Markdown>
        </div>
      </div>
    </article>
  );
};

export default Post;
