import React, { useState } from "react";

const Search = ({ searchUsers }) => {
  // const [text, setText] = useState("");
  // const [qaz, setQaz] = useState("");
  // const handleQaz = (e) => {
  //   setQaz(e.target.value);
  // };
  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };

  const [formData, setFormData] = useState({
    text: "",
    qaz: "",
  });
  const handelFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUsers(formData.text);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.text}
          name="text"
          onChange={handelFormData}
          placeholder="Search Users .. "
        />

        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

// class Search extends Component {
//   state = {
//     text: "",
//   };

//   handleChange = (e) => {
//     this.setState({ text: e.target.value });

//     this.props.onSearchFilter(e.target.value.toLowerCase());
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.searchUsers(this.state.text);
//   };

//   render() {
//     return (
//       <div>
//         <form className="form" onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.text}
//             name="text"
//             onChange={this.handleChange}
//             placeholder="Search Users .. "
//           />
//           <input
//             type="submit"
//             value="Search"
//             className="btn btn-dark btn-block"
//           />
//         </form>
//       </div>
//     );
//   }
// }

export default Search;
