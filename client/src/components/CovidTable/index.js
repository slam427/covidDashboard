import React,{Component} from 'react';
const axios = require ('axios');
const URL = 'https://covidtracking.com/api/v1/states/current.json';

class CovidTable extends Component {

    componentDidMount() {
        
        axios.get(URL).then((res) => {
            console.log(res.data)
            this.setState({
                isLoaded:true,
                items:res.data
            });
            res.data.filter(()=> {
            return res.data
            })
            .map((stateInfo) => {
                const stateTable = {
                    state: stateInfo.state,
                    totalCases: stateInfo.total,
                    deaths: stateInfo.death,
                    totalTests: stateInfo.totalTestResults
                }
                console.log(stateTable)
            })
            })
    }

    render() {

        return (
            <div>
                <table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Total Cases<button onClick={()=>this.sortByTotalCases(true)}>Sort</button></th>
                        <th>Deaths<button onClick={()=>this.sortByDeaths(false)}>Sort</button></th>
                        <th>Total Tests Conducted</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                        </tr>
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