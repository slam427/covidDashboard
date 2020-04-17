import React from 'react';
import './style.css';


function NewsArticle() {
    return (
        // <div className="card small card-panel black-text">
        // <div className="card-content white-text">
        <div className="row">
            <div className="col s12 m6">
                <div className="card card-panel white">
                    <div className="card-content black-text">
                        <span className="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div className="card-action">
                        <button href="#">Save</button>
                        <button href="#">View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
// onClick={handleClick}

export default NewsArticle;