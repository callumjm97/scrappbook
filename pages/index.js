import LoginLayout from "../components/loginLayout";
import React from 'react';
import "../index.css"
import FacebookLogin from 'react-facebook-login';
import Link from 'next/link'
import 'isomorphic-fetch'
import {loadFirebase} from '../lib/db';

const responseFacebook = (response) => {
    console.log(response);
}



// const Index = props => (
//     <LoginLayout>
//         <div className="LoginContent">
//             <img src="/static/Family.png"/>
//             <p className="LoginTitle">SCRAPPBOOK</p>
//             <input type="text" placeholder="Username" className="LoginInput"/> <br/>
//             <input type="password" placeholder="Password" className="LoginInput"/> <br />
//             <button type="button" className="LoginBtn">Log in</button> <br/>
//             <button type="button" className="LoginBtn">Sign Up</button><br/>
//             <div class="HorizontalDiv"></div>
//             <FacebookLogin
//                 appId="461136824455844"
//                 autoLoad={false}
//                 fields="name,email,picture"
//                 callback={Post.getInitialProps = async function(response) {   
//                    $("#FBName").val(props.name);
//                     console.log(`Fetched name: ${props.name}`);
//                     console.log(`Fetched email: ${props.email}`);                     
//                     return{ response };
//                   }}
//                 // callback={responseFacebook}
//                 cssClass="FacebookBtn"
//                 icon="fa-facebook"
//             />
//             <p id="FBName"></p>
//         </div>
        

//         <div className="footerDiv">
//             <img src="/static/CAappsLogoTran.png" className="footerLogo"/>
//         </div>
//     </LoginLayout>
// );

// export default function Blog(){
//     return(
//         <LoginLayout>
//             <div className="LoginContent">
//                 <img src="/static/Family.png"/>
//                 <p className="LoginTitle">SCRAPPBOOK</p>
//                 <input type="text" placeholder="Username" className="LoginInput"/> <br/>
//                 <input type="password" placeholder="Password" className="LoginInput"/> <br />
//                 <button type="button" className="LoginBtn">Log in</button> <br/>
//                 <button type="button" className="LoginBtn">Sign Up</button><br/>
//                 <div class="HorizontalDiv"></div>

//                 <FacebookLogin
//                     appId="461136824455844"
//                     autoLoad={false}
//                     fields="name,email,picture"
//                     callback={responseFacebook}
//                     cssClass="FacebookBtn"
//                     icon="fa-facebook"
//                 />
//             </div>
            

//             <div className="footerDiv">
//                 <img src="/static/CAappsLogoTran.png" className="footerLogo"/>
//             </div>
//         </LoginLayout>
//     );
// }

// static async getInitialProps(){
//     let firebase = loadFirebase();
//     let db = firebase.firestore();
    
//     let result = await new Promise((resolve, reject) => {db.collection('User_Login')
//         .limit(10)
//         .get()
//         .then(snapshot => {
//             let data = []
//             snapshot.forEach(doc => {
//                 data.push(Object.assign({
//                     id: doc.id
//                 }, doc.data()))
//             })
//             resolve(snapshot);   
//         }).catch(error => {
//             reject([])
//         });
//     });
//     return result;
// }
export default class Index extends React.Component{
    constructor(){
        super()
        this.state = {
            agencies: [
                {name: 'Callum Joseph Morgan'}
            ]
        }
    }

    async componentDidMount(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const agencies = await response.json();

        this.setState({agencies: agencies});
    }

    render(){
        return <div>hello <hr/>
        {(this.state.agencies && this.state.agencies.length > 0) ? 
        <ul>
        {this.state.agencies.map(agency => <li><h3>{agency.title}</h3></li>)}
        </ul> : <p><strong>didn't find anything</strong></p>}
        </div>
        
    }
}