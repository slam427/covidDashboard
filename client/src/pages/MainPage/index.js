import React, { useEffect, useState, Component } from 'react';
import CovidTable from '../../components/CovidTable';
// import Map from '../../components/Map';
import AllNews from '../../components/AllNews';
import './style.css';
import API from '../../utils/API';




class MainPage extends Component {

    state = {
        data: {
            articles: []
        }
    }

    componentDidMount() {
        API.getAllNews().then((articles) => {

            const copyData = { ...this.state.data };
            copyData.articles = articles.data
            this.setState({
                data: copyData
            });

            console.log(articles.data)

        })

    }


    render() {

        return (
            <main>
                <div className='allNews'>
                    <AllNews newArticles={this.state.data.articles} />
                </div>
                <div>
                    <iframe width="650" height="400" frameborder="0" scrolling="no"
                        marginheight="0" marginwidth="0" title="2019-nCoV"
                        src="//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
                    ></iframe>
                </div>
                <div className='covidTable'>
                    <CovidTable />
                </div>
            </main>
        )


    }



}



// function MainPage () {
//     const [articles, setArticles] = useState([]);
//     useEffect(()=>{
//         API.getAllNews().then((articles)=> {
//             console.log(articles)
//             setArticles(articles.data);
//         })
//     })

//     return(
//         <main>
//         <div className='allNews'>
//             <AllNews newArticles={articles} />
//         </div>
//         <div className ='covidTable'>
//             <CovidTable />
//         </div>
//         </main>
//     )
// }


export default MainPage;