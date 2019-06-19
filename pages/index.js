import LoginLayout from "../components/loginLayout";
import React from 'react';
import "../index.css"
import FacebookLogin from 'react-facebook-login';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

HomePage.getInitialProps = async ({ req, query }) => {
  const protocol = req
    ? `${req.headers['x-forwarded-proto']}:`
    : location.protocol
  const host = req ? req.headers['x-forwarded-host'] : location.host
  const pageRequest = `${protocol}//${host}/api/profiles?page=${query.page ||
    1}&limit=${query.limit || 9}`
  const res = await fetch(pageRequest)
  const json = await res.json()
  return json
}

function HomePage({ profiles, page, pageCount }) {
  return (
    <>
      <ul>
        {profiles.map(p => (
          <li className="profile" key={p.id}>
            <Link prefetch href={`/profile?id=${p.id}`}>
              <a>
                <img src={p.avatar} />
                <span>{p.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <nav>
        {page > 1 && (
          <Link prefetch href={`/?page=${page - 1}&limit=9`}>
            <a>Previous</a>
          </Link>
        )}
        {page < pageCount && (
          <Link prefetch href={`/?page=${page + 1}&limit=9`}>
            <a className="next">Next</a>
          </Link>
        )}
      </nav>
    </>
  )
}

export default HomePage

// const responseFacebook = (response) => {
//     console.log(response);
// }

// const Post = props => (
//       <h1>{props.name}</h1>
//   );

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
//                     console.log(`Fetched name: ${props.name}`);
//                     console.log(`Fetched email: ${props.email}`);                     
//                     return{ response };
//                   }}
//                 // callback={responseFacebook}
//                 cssClass="FacebookBtn"
//                 icon="fa-facebook"
//             />
            
//         </div>
        

//         <div className="footerDiv">
//             <img src="/static/CAappsLogoTran.png" className="footerLogo"/>
//         </div>
//     </LoginLayout>
// );

// export default Index;

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