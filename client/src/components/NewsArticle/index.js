import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';



function NewsArticle(props) {
    
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card card-panel white">
                    <div className="card-content black-text">
                        <span className="card-title">{props.article.headline}</span>
                        <p>{props.article.snippet}</p>
                    </div>
                    <div className="card-action">
                        <a href="/mypage">Save</a>
                        
                        <a href={props.article.viewLink}><button>View</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewsArticle;