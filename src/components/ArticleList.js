import React from "react";
import Article from "./components/Article.js"


function ArticleList({data}){

    const artData = data.map((item) => <Article key={item.id} 
    date={item.date} preview={item.preview} title={item.title}/> )
    return(
        <main>
            {artData}
        </main>
    )
}

export default ArticleList