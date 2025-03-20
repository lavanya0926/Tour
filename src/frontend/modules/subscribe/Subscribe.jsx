// import React from "react";
// import "./Subscribe.css";
// import maleTour from '../../../assets/images/male-tourist.png'

// const Subscribe = () => {
//   return (
//     <div className="subscribeContainer">
//       <div className="subscribeSubContainer" >
//         <p className="subscribeCaption">Subscribe now for usefull <br/> travelling information.</p>
//         < input type="text" placeholder="Enter your email" className="subscribeInput"/>
//         <button className="subscribeBtn">Subscribe</button>
//         <p className="subscribeDesc">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Officiis
//           optio dicta excepturi dolores ad dolore!
//         </p>
//       </div>
//       <div>
//         < img src={maleTour} alt="maleTour" className="subscribeImg" />
//       </div>
//     </div>
//   );
// };

// export default Subscribe;




import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import maleTour from "../../../assets/images/male-tourist.png";

const Subscribe = () => {
  return (
    <div className="container py-5 bg-info text-white">
      <div className="row align-items-center">
        <div className="col-md-6 order-md-1 text-center text-md-start mb-4 mb-md-0">
          <h2 className="fw-bold">
            Subscribe now for useful <br /> travelling information.
          </h2>
          <div className="input-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
            <button className="btn btn-warning text-white fw-bold">Subscribe</button>
          </div>
          <p className="fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            optio dicta excepturi dolores ad dolore!
          </p>
        </div>
        <div className="col-md-6 order-md-2 text-center">
          <img src={maleTour} alt="maleTour" className="img-fluid w-75" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
