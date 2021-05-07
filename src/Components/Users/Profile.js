import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Repos from "./Repos";
import Spinner from "../Layouts/Spinner";

const Profile = (props) => {
  let { userId } = props.match.params;
  useEffect(() => {
    props.getUserAndRepo(userId);
  }, [userId]);
  return (
    <>
      {props.loading ? (
        <Spinner />
      ) : (
        <div>
          <Link to="/" className="btn btn-light">
            Back to search
          </Link>
          Hireable :
          {props.user.hireable ? (
            <i className="fas fa-check" text-success />
          ) : (
            <i className="fas fa-times-circle" text-danger />
          )}
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={props.user.avatar_url}
                alt={props.user.login}
                className="round-img"
                style={{ width: "150px" }}
              />
              <h2>{props.user.login}</h2>
              <p>Location : {props.user.location}</p>
            </div>
            <div>
              {props.user.bio && (
                <>
                  <h3>Bio</h3>
                  <p>{props.user.bio}</p>
                </>
              )}
              <a
                href={props.user.html_url}
                className="btn btn-dark my-1"
                rel="noreferrer"
              >
                Github Profile
              </a>
              <ul>
                <li>
                  {props.user.login && (
                    <>
                      <strong>Username :</strong>
                      {props.user.login}
                    </>
                  )}
                </li>
                <li>
                  {props.user.company && (
                    <>
                      <strong>Company :</strong>
                      {props.user.company}
                    </>
                  )}
                </li>
                <li>
                  {props.user.blog && (
                    <>
                      <strong>Blog :</strong>
                      <a href={props.user.blog} rel="noreferrer">
                        {props.user.blog}
                      </a>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">
              Followers :{props.user.followers}
            </div>
            <div className="badge badge-success">
              Following :{props.user.following}
            </div>
            <div className="badge badge-light">
              Public Repos :{props.user.public_repos}
            </div>
            <div className="badge badge-primary">
              Public Gists : {props.user.public_gists}
            </div>
          </div>
          <Repos repos={props.repos} />
        </div>
      )}
    </>
  );
};

// class Profile extends Component {
//   componentDidMount() {
//     const { userId } = this.props.match.params;
//     this.props.getUserAndRepo(userId);
//   }

//   render() {
//     return (
//       <>
//         {this.props.loading ? (
//           <Spinner />
//         ) : (
//           <div>
//             <Link to="/" className="btn btn-light">
//               Back to search
//             </Link>
//             Hireable :
//             {this.props.user.hireable ? (
//               <i className="fas fa-check" text-success />
//             ) : (
//               <i className="fas fa-times-circle" text-danger />
//             )}
//             <div className="card grid-2">
//               <div className="all-center">
//                 <img
//                   src={this.props.user.avatar_url}
//                   alt={this.props.user.login}
//                   className="round-img"
//                   style={{ width: "150px" }}
//                 />
//                 <h2>{this.props.user.login}</h2>
//                 <p>Location : {this.props.user.location}</p>
//               </div>
//               <div>
//                 {this.props.user.bio && (
//                   <>
//                     <h3>Bio</h3>
//                     <p>{this.props.user.bio}</p>
//                   </>
//                 )}
//                 <a
//                   href={this.props.user.html_url}
//                   className="btn btn-dark my-1"
//                   rel="noreferrer"
//                 >
//                   Github Profile
//                 </a>
//                 <ul>
//                   <li>
//                     {this.props.user.login && (
//                       <>
//                         <strong>Username :</strong>
//                         {this.props.user.login}
//                       </>
//                     )}
//                   </li>
//                   <li>
//                     {this.props.user.company && (
//                       <>
//                         <strong>Company :</strong>
//                         {this.props.user.company}
//                       </>
//                     )}
//                   </li>
//                   <li>
//                     {this.props.user.blog && (
//                       <>
//                         <strong>Blog :</strong>
//                         {this.props.user.blog}
//                       </>
//                     )}
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="card text-center">
//               <div className="badge badge-primary">
//                 Followers :{this.props.user.followers}
//               </div>
//               <div className="badge badge-success">
//                 Following :{this.props.user.following}
//               </div>
//               <div className="badge badge-light">
//                 Public Repos :{this.props.user.public_repos}
//               </div>
//               <div className="badge badge-primary">
//                 Public Gists : {this.props.user.public_gists}
//               </div>
//             </div>
//             <Repos repos={this.props.repos} />
//           </div>
//         )}
//       </>
//     );
//   }
// }

export default Profile;
