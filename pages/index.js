import LoginLayout from "../components/loginLayout";
import React from 'react';
import "../index.css"
import FacebookLogin from 'react-facebook-login';

import {loadFirebase} from '../lib/db.js';



export default class Index extends React.Component{
    static async getInitialProps(){
        let firebase = await loadFirebase();
        let db = firebase.firestore();
        let result = await new Promise((resolve, reject) => { db.collection('User_Login').limit(10).get()
            .then(snapshot => {
                let data = [];
                snapshot.forEach(doc => {
                    data.push(Object.assign({
                        id: doc.id
                    }, doc.data()));
                });
                resolve(data);
            })
            .catch(error => {
                reject([]);
            }
        )});

        return {agencies: result};
    }
    render(){
    return<LoginLayout>
        <div>hello <hr/>
            {(this.props.agencies && this.props.agencies.length > 0) ? 
            <ul>
            {this.props.agencies.map(agency => <li key="{agency.id}">Name: {agency.First_Name} {agency.Last_Name}</li>)}
            </ul> : <p><strong>didn't find anything</strong></p>}
        </div>
         <div className="LoginContent">
             <img src="/static/Family.png"/>
             <p className="LoginTitle">SCRAPPBOOK</p>
             <input type="text" placeholder="Username" className="LoginInput"/> <br/>
             <input type="password" placeholder="Password" className="LoginInput"/> <br />
             <button type="button" className="LoginBtn">Log in</button> <br/>
             <button type="button" className="LoginBtn">Sign Up</button><br/>
             <div class="HorizontalDiv"></div>
             <FacebookLogin
                appId="461136824455844"
                autoLoad={false}
                fields="name,email,picture"
                callback={Index                                                                       .getInitialProps = async function(response) {   
                   $("#FBName").val(props.name);
                    console.log(`Fetched name: ${props.name}`);
                    console.log(`Fetched email: ${props.email}`);                     
                    return{ response };
                  }}
                // callback={responseFacebook}
                cssClass="FacebookBtn"
                icon="fa-facebook"
            />
            <p id="FBName"></p>
        </div>
        

        <div className="footerDiv">
            <img src="/static/CAappsLogoTran.png" className="footerLogo"/>
        </div>
        </LoginLayout>
    }
}


// const responseFacebook = (response) => {
//     console.log(response);
// }
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


