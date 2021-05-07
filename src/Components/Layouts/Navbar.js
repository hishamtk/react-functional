import React from "react";
import { Link } from "react-router-dom";

// class Navbar extends Component {
//   render() {
//     const { title, icon } = this.props;
//     return (
//       <nav className="navbar bg-primary">
//         <h1>
//           {title} <i className={`${icon}`} />
//         </h1>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

function Navbar({ icon, title }) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {title} <i className={`${icon}`} />
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
