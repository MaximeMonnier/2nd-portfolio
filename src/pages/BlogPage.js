import React from "react";
import LogoComponent from "../components/LogoComponent";
import PowerButton from "../components/PowerButton";
import SocialCons from "../components/SocialCons";
import Article from "../components/Article";
import { Blogs } from "../data/BlogData";
import Anchor from "../components/Anchor";

const BlogPage = () => {
  return (
    <div className="container-blog-main">
      <div className="container-blog-sec">
        <LogoComponent />
        <PowerButton />
        <SocialCons />
        <Anchor />
        <div className="center-blog">
          <div className="grid-blog">
            {Blogs.map((article) => {
              return <Article key={article.id} article={article} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
