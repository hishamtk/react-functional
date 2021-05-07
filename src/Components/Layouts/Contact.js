import React, { useState } from "react";

// class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Contact Us</h1>
//         <p>admin@hishamtk.com</p>
//       </div>
//     );
//   }
// }

function Contact() {
  const [countData, setCount] = useState({
    count1: 0,
    count2: 0,
  });
  const handleCount = (e) => {
    setCount({
      ...countData,
      [e.target.name]: countData[e.target.name] + 1,
    });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>admin@hishamtk.com</p>
      <button className="btn" name="count1" onClick={handleCount}>
        {countData.count1}
      </button>
      <button className="btn" name="count2" onClick={handleCount}>
        {countData.count2}
      </button>
    </div>
  );
}

export default Contact;
