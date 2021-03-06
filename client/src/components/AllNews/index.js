import React from 'react';
import NewsArticle from '../NewsArticle'
// import { PromiseProvider } from 'mongoose';

function AllNews (props) {
    // console.log(props)
    return(
        <div>
            {props.newArticles.map((eachArticle) => {
            return <NewsArticle key={eachArticle.articleID} article={eachArticle}/>
            })}
        </div>
    )
}

export default AllNews;
