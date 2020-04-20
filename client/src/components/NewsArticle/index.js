import React from 'react';
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
                        <button href="#">Save</button>
                <a href={props.article.viewLink}><button>View</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewsArticle;