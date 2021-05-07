import React, { useEffect } from "react";

import Search from "./Search";
import UserItem from "./UserItem";
import Spinner from "../Layouts/Spinner";

const Users = (props) => {
  const diplayAlert = (msg, type) => {
    props.diplayAlert(msg, type);
  };

  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
  };

  useEffect(() => {
    props.getAllUsers();
  }, []);

  return (
    <div>
      <Search onNullSearch={diplayAlert} searchUsers={props.searchUsers} />
      {props.loading ? (
        <Spinner />
      ) : (
        <div style={userStyle}>
          {props.users.map((element) => (
            <UserItem
              login={element.login}
              avatar_url={element.avatar_url}
              key={element.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// class Users extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       usersConst: [],
//     };
//   }

//   componentDidMount() {
//     this.props.getAllUsers();
//   }

//   diplayAlert = (msg, type) => {
//     this.setState({ alert: { msg, type } });
//     setTimeout(() => {
//       this.setState({ alert: null });
//     }, 5000);
//   };
//   removeNonMatch = (keyword) => {
//     let users = this.state.usersConst;
//     // let regex = `/${keyword}/g`;
//     const regex = new RegExp(`(${keyword})`);

//     let newUsers = users.filter(({ login }) => {
//       return regex.test(login);
//     });
//     this.setState({ users: newUsers });
//   };

//   render() {
//     const userStyle = {
//       display: "grid",
//       gridTemplateColumns: "repeat(3,1fr)",
//       gridGap: "1rem",
//     };
//     return (
//       <div>
//         <Search
//           onNullSearch={this.diplayAlert}
//           onSearchFilter={this.removeNonMatch}
//           searchUsers={this.props.searchUsers}
//         />
//         {this.props.loading ? (
//           <Spinner />
//         ) : (
//           <div style={userStyle}>
//             {this.props.users.map((element) => (
//               <UserItem
//                 login={element.login}
//                 avatar_url={element.avatar_url}
//                 key={element.id}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default Users;
