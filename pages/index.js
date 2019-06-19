import LoginLayout from "../components/loginLayout";
import React from 'react';
import "../index.css"
import Link from "next/link";
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
    console.log(response);
}

const Post = props => (
      <h1>{props.name}</h1>
  );

const Index = props => (
    <LoginLayout>
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
                callback={Post.getInitialProps = async function(response) {   
                    console.log(`Fetched name: ${props.name}`);
                    console.log(`Fetched email: ${props.email}`);                     
                    return{ response };
                  }}
                // callback={responseFacebook}
                cssClass="FacebookBtn"
                icon="fa-facebook"
            />
            
        </div>
        

        <div className="footerDiv">
            <img src="/static/CAappsLogoTran.png" className="footerLogo"/>
        </div>
    </LoginLayout>
);

export default Index;

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