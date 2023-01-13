import React from "react";
import blogData from "../data/blog";
import Header from "./components/Header.js";
import About from "./components/About.js";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image = {blogData.image} text = {blogData.about}/>
       <ArticleList data={blogData.posts}/>
    </div>
  );
}

export default App;
