import React from 'react';
import NewsArticle from '../NewsArticle'
import { PromiseProvider } from 'mongoose';

function AllNews () {
    // console.log(props)
    return(
        <div>
            <NewsArticle />
        </div>
    )
}

export default AllNews;