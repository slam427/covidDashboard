import React, { Component } from 'react';
import './style.css';
const axios = require('axios');

class CovidTable extends Component {
    state = {
        data: []
    }


    componentDidMount() {
        axios.get('https://covidtracking.com/api/v1/states/current.json')
    
        .then(res => this.setState({
            data: res.data
        }))
        .catch(err => console.log("the err", err))
    }
    
render() {

    return (
        <div>
            <table>
                <thead className="covidHead">
                    <tr>
                        <th scope="col">State</th>
                        <th scope="col">Total Cases<button onClick={() => this.sortByTotalCases(true)}>Sort</button></th>
                        <th scope="col">Deaths<button onClick={() => this.sortByDeaths(false)}>Sort</button></th>
                        <th scope="col">Total Tests Conducted</th>
                    </tr>
                </thead>
                <tbody className="covidBody">
                    {this.state.data.map(item => (              
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.state}</td>
                            <td>{item.total}</td>
                            <td>{item.death}</td>
                            <td>{item.totalTestResults}</td>
                        </tr>
    


                        
                    ))
                
                    }

                </tbody>
            </table>
        </div>
    )
}
}


export default CovidTable;



// sortByName = (isFirstName) => {
//     let nameType = null;
//     if(isFirstName) {
//         nameType = "first"
//     } else {
//         nameType = "last"
//     }

//     let sortedEmployees = this.props.filteredEmployees.sort((a, b) => {
//         if (b.name[nameType].toLowerCase() > a.name[nameType].toLowerCase()) {
//             return -1;
//         }

//         if (a.name[nameType].toLowerCase() > b.name[nameType].toLowerCase()) {
//             return 1;
//         }

//         return 0;
//     });
//     console.log(sortedEmployees);

//     if (this.state.sortOrder === "DESC") {
//         sortedEmployees.reverse();
//         this.setState({ sortOrder: "ASC" });
//     } else {
//         this.setState({ sortOrder: "DESC" });
//     }
// }