import React,{Component} from 'react';
import axios from 'axios';






class SignUpPage extends Component {

    state = {
            data: {
                email:"",
                name: "",
                password: ""
            }
    }

handleChange=(e)=> {


let copyData = {...this.state.data};
copyData[e.target.id] = e.target.value
this.setState({
    data: copyData
})


}
handleSubmit =(e)=> {
    e.preventDefault();
    axios.get('http://localhost/new_user').then(()=>{
        console.log('gone')


    }).catch(err=>console.log(err))
    console.log(this.state.data)
}


render() {
    return (
        <div>
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="name">Name</label>
                                <span className="helper-text" data-error="wrong" data-success="right"></span>
                            </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="email">Email</label>
                                <span className="helper-text" data-error="wrong" data-success="right"></span>
                            </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="password">Password</label>
                                <span className="helper-text" data-error="wrong" data-success="right"></span>
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

}





// function SignUpPage() {
//     return (
//         <div>
//             <div className="row">
//                 <form class="col s12">
//                     <div class="row">
//                         <div class="input-field col s12">
//                             <input id="email" type="email" class="validate" onChange={}/>
//                                 <label for="email">Name</label>
//                                 <span class="helper-text" data-error="wrong" data-success="right"></span>
//                             </div>
//                         </div>
//                         <div class="row">
//                         <div class="input-field col s12">
//                             <input id="email" type="email" class="validate"/>
//                                 <label for="email">Email</label>
//                                 <span class="helper-text" data-error="wrong" data-success="right"></span>
//                             </div>
//                         </div>
//                         <div class="row">
//                         <div class="input-field col s12">
//                             <input id="email" type="email" class="validate"/>
//                                 <label for="email">Password</label>
//                                 <span class="helper-text" data-error="wrong" data-success="right"></span>
//                             </div>
//                         </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

export default SignUpPage;