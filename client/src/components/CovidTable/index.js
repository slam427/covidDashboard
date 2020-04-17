import React from 'react';


function CovidTable (props) {
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
                            <td>State</td>
                            <td>Total Cases</td>
                            <td>Deaths</td>
                            <td>Total Tests Conducted</td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CovidTable;