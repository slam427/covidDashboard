import React, { useEffect, useState } from 'react';
import CovidTable from '../../components/CovidTable';
// import Map from '../../components/Map';
import AllNews from '../../components/AllNews';
import './style.css';
import API from '../../utils/API';

function MainPage () {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        API.getAllNews().then((articles)=> {
            console.log(articles)
            setArticles(articles.data);
        })
    })
    return(
        <main>
        <div className='allNews'>
            <AllNews newArticles={articles} />
        </div>
        <div className ='covidTable'>
            <CovidTable />
        </div>
        </main>
    )
}


export default MainPage;
