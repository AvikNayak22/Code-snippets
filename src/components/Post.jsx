import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";
import Code from "./Code";

const Post = () => {
  const [postContent, setPostContent] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(1);

  useEffect(() => {
    import(`../markdown/article${selectedArticle}.md`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostContent(response))
        .catch((err) => console.error(err));
    });
  }, [selectedArticle]);

  const handleArticleChange = (event) => {
    setSelectedArticle(Number(event.target.value));
  };

  return (
    <article className="article">
      <div className="container">
        <div className="post-wrapper">
          {/* <h1>Posts</h1> */}

          <div className="article-options">
            <p>Select an article</p>
            <select
              value={selectedArticle}
              onChange={handleArticleChange}
              placeholder="Select an article"
            >
              <option value={1}>DOM Cheat Sheet</option>
              <option value={2}>SQL Cheat Sheet</option>
              <option value={3}>STL Cheat Sheet</option>
            </select>
          </div>

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
