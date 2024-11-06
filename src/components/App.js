import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
        <header>
        <header name= {blogData.name}/>
        </header>
        <aside>
            <about image= {blogData.image} about={blogData.about} />
        </aside>
        <main>
            <ArticleList posts={blogData.posts}/>
        </main>
    </div>
  )
}

export default App;
