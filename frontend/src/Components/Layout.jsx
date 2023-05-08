// import React from "react";
// import IconImage from "../../public/images/icon.png";
// import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import ReactModal from "react-modal";
// import { useEffect } from "react";
// const Layout = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [location, setLocation] = useState(useLocation());

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("http://localhost:5000/liveAuction");
//       const json = await response.json();
//       setData(json);
//       console.log(json)
//     }

//     fetchData();
//   }, []);

//   const [formData, setFormData] = useState({
//     product_image: "",
//     product_name: "",
//     product_price: "",
//     expiry_time: "",
//     expiry_date: "",
//     category: "",
//   });



//   const handleChange = (event) => {
//     console.log(formData);
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleTime = (event) => {
//     // console.log(formData);
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value+":00" });
//   };
//   const handleImageChange = (event) => {
    
//     const { name } = event.target;
//     const data = new FileReader()
//     console.log(data.result)
//     data.addEventListener('load',()=>{
//         // setImgs(data.result)
//         setFormData({ ...formData, [name]: data });
//     })
//     data.readAsDataURL(event.target.files[0])
//   };

//   const handleSubmit = (event) => {
//     // console.log("handleSubmt");
//     // console.log(formData);
//     event.preventDefault();
//     const temp = JSON.stringify(formData);
//     console.log(temp);
//     fetch("http://localhost:5000/createAuction", {
//       method: "POST",
//       mode: "cors",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//       // body: {'test':'test'}
//       // body: (formData)
//     })
//       // .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error(error));
//   };
//   console.log(location.pathname);
//   const buttons = () => {
//     if (location.pathname === "/loggedIn") {
//       return (
//         <div>
//           <button type="button">
//             {isLoggedIn ? (
//               <NavLink className="btn btn-primary  w-75 py-2  " to="/login">
//                 Logout
//               </NavLink>
//             ) : (
//               <NavLink className="btn btn-danger py-2" to="/login">
//                 Login
//               </NavLink>
//             )}
//           </button>
//           <NavLink to="register" className="btn btn-primary pt-2">
//             Register
//           </NavLink>
//         </div>
//       );
//     } else {
//       return (
//         <button
//           type="button"
//           onClick={() => setIsModalOpen(true)}
//           className="btn btn-danger"
//         >
//           Create an auction
//         </button>
//       );
//     }
//   };
//   return (
//     <div>
//       <div className="flex  align-items-center py-2 px-5  w-screen bg-[#73c8d2] ">
//         <div>
//           <h1>AuctionHub</h1>
//         </div>
//         <div className="d-flex gap-3 ml-[800px]">
//           {/* <div className="btn btn-primary">
//               Login
//             </div> */}
//           <ReactModal
//             isOpen={isModalOpen}
//             onRequestClose={() => setIsModalOpen(false)}
//             style={{
//               overlay: {
//                 backgroundColor: "rgba(0, 0, 0, 0.75)",
//               },
//               content: {
//                 width: "1000px",
//                 margin: "0 auto",
//               },
//             }}
//           >
//             <div className="rounded-4xl m-0 p-0 ">
//               {/* <div className="col-sm-9 mb-3 mb-sm-0"> */}
//               <div
//                 className="card"
//                 style={{
//                   // marginLeft: "350px",
//                   marginTop: "0px",
//                   borderRadius: "20px",
//                   borderColor: "#75d2dd",
//                   borderWidth: "20px",
//                 }}
//               >
//                 <div className="card-body">
//                   <h1 className="card-title ">Create An Auction</h1>
//                   <hr />
//                   <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                       <label htmlFor="nameField">Product Name</label>
//                       <input
//                         type="text"
//                         id="nameField"
//                         placeholder="Enter here"
//                         className="form-control"
//                         name="product_name"
//                         onChange={handleChange}
//                         value={formData.product_name}
//                       />
//                     </div>
//                     <div className="form-group mt-4">
//                       <label htmlFor="price">Product Price (in INR)</label>
//                       <input
//                         type="text"
//                         id="price"
//                         placeholder="Enter here"
//                         className="form-control"
//                         name="product_price"
//                         onChange={handleChange}
//                         value={formData.product_price}
//                       />
//                     </div>

//                     <div className="form-group mt-4">
//                       <label htmlFor="expiry_date">Expiry</label>
//                       <input
//                         type="date"
//                         id="expiry"
//                         placeholder="Enter here"
//                         className="form-control"
//                         name="expiry_date"
//                         onChange={handleChange}
//                         value={formData.expiry_date}
//                       />
//                     </div>
//                     <div className="form-group mt-4">
//                       <label htmlFor="expiry">Expiry</label>
//                       <input
//                         type="time"
//                         id="expiry_time"
//                         placeholder="Enter here"
//                         className="form-control"
//                         name="expiry_time"
//                         onChange={handleChange}
//                         value={formData.expiry_time}
//                         step="1"
//                       />
//                     </div>

//                     <div className="form-group mt-4">
//                       <label htmlFor="category">Product Category</label>
//                       <select
//                         className="form-select"
//                         id="category"
//                         aria-label="Default select example"
//                         name="category"
//                         onChange={handleChange}
//                         value={formData.category}
//                       >
//                         <option defaultValue>Select Product Category</option>
//                         <option value="1">Automobile</option>
//                         <option value="2">Electronics</option>
//                         <option value="3">Furniture</option>
//                       </select>
//                     </div>

//                     <div className="form-group mt-4">
//                       <label htmlFor="imgField">Product Image</label>
//                       <input
//                         id="imgField"
//                         name="product_image"
//                         type="file"
//                         className="form-control"
//                         onChange={handleImageChange}
//                         // value={formData.product_image}
//                       />
//                     </div>

//                     <div className="form-group mt-4 text-center">
//                       <button
//                         onSubmit={handleSubmit}
//                         type="submit"
//                         className="btn btn-primary"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               {/* </div> */}
//               {/* <button >Close Modal</button> */}
//             </div>
//             ;
//           </ReactModal>
//           <div>
//             {location.pathname === "/loggedIn" ? (
//               <button
//                 type="button"
//                 onClick={() => setIsModalOpen(true)}
//                 className="btn btn-danger"
//               >
//                 Create an auction
//               </button>
//             ) : (
//               <div className="flex gap-4">
//                 <button type="button">
//                   {isLoggedIn ? (
//                     <NavLink
//                       className="btn btn-primary  w-75 py-2  "
//                       to="/login"
//                     >
//                       Logout
//                     </NavLink>
//                   ) : (
//                     <NavLink className="btn btn-danger py-2" to="/login">
//                       Login
//                     </NavLink>
//                   )}
//                 </button>
//                 <NavLink to="register" className="btn btn-primary pt-2">
//                   Register
//                 </NavLink>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div>
//         <Outlet setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
//       </div>
//     </div>
//   );
// };

// export default Layout;
import React from "react";
import IconImage from "../../public/images/icon.png";
import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import ReactModal from "react-modal";
import { useEffect } from "react";
const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [location, setLocation] = useState(useLocation());

  const [data, setData] = useState(null);

 

  const [formData, setFormData] = useState({
    product_image: "",
    product_name: "",
    product_price: "",
    expiry_time: "",
    expiry_date: "",
    category: "",
  });



  const handleChange = (event) => {
    console.log(formData);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleTime = (event) => {
    // console.log(formData);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value+":00" });
  };


  const handleSubmit = (event) => {
    // console.log("handleSubmt");
    // console.log(formData);
    event.preventDefault();
    const temp = JSON.stringify(formData);
    console.log(temp);
    fetch("http://localhost:5000/createAuction", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  console.log(location.pathname);

  const [imgs,setImgs] =useState()
   
  const handleImageChange=(event)=>{

      const { name } = event.target;

      const data = new FileReader()
      console.log(data.result)
      data.addEventListener('load',()=>{
          setFormData({ ...formData, [name]: data.result });
      })
      data.readAsDataURL(event.target.files[0])
  }




  const buttons = () => {
    if (location.pathname === "/loggedIn") {
      return (
        <div>
          <button type="button">
            {isLoggedIn ? (
              <NavLink className="btn btn-primary  w-75 py-2  " to="/login">
                Logout
              </NavLink>
            ) : (
              <NavLink className="btn btn-danger py-2" to="/login">
                Login
              </NavLink>
            )}
          </button>
          <NavLink to="register" className="btn btn-primary pt-2">
            Register
          </NavLink>
        </div>
      );
    } else {
      return (
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="btn btn-danger"
        >
          Create an auction
        </button>
      );
    }
  };
  return (
    <div>
      <div className="flex  align-items-center py-2 px-5  w-screen bg-[#73c8d2] ">
        <div>
          <h1>AuctionHub</h1>
        </div>
        <div className="d-flex gap-3 ml-[800px]">
          {/* <div className="btn btn-primary">
              Login
            </div> */}
          <ReactModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
              content: {
                width: "1000px",
                margin: "0 auto",
              },
            }}
          >
            <div className="rounded-4xl m-0 p-0 ">
              {/* <div className="col-sm-9 mb-3 mb-sm-0"> */}
              <div
                className="card"
                style={{
                  // marginLeft: "350px",
                  marginTop: "0px",
                  borderRadius: "20px",
                  borderColor: "#75d2dd",
                  borderWidth: "20px",
                }}
              >
                <div className="card-body">
                  <h1 className="card-title ">Create An Auction</h1>
                  <hr />
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="nameField">Product Name</label>
                      <input
                        type="text"
                        id="nameField"
                        placeholder="Enter here"
                        className="form-control"
                        name="product_name"
                        onChange={handleChange}
                        value={formData.product_name}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label htmlFor="price">Product Price (in INR)</label>
                      <input
                        type="text"
                        id="price"
                        placeholder="Enter here"
                        className="form-control"
                        name="product_price"
                        onChange={handleChange}
                        value={formData.product_price}
                      />
                    </div>

                    <div className="form-group mt-4">
                      <label htmlFor="expiry_date">Expiry</label>
                      <input
                        type="date"
                        id="expiry"
                        placeholder="Enter here"
                        className="form-control"
                        name="expiry_date"
                        onChange={handleChange}
                        value={formData.expiry_date}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label htmlFor="expiry">Expiry</label>
                      <input
                        type="time"
                        id="expiry_time"
                        placeholder="Enter here"
                        className="form-control"
                        name="expiry_time"
                        onChange={handleChange}
                        value={formData.expiry_time}
                        step="1"
                      />
                    </div>

                    <div className="form-group mt-4">
                      <label htmlFor="category">Product Category</label>
                      <select
                        className="form-select"
                        id="category"
                        aria-label="Default select example"
                        name="category"
                        onChange={handleChange}
                        value={formData.category}
                      >
                        <option defaultValue>Select Product Category</option>
                        <option value="Car">Car</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Cameras">Cameras</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Paintings">Paintings</option>



                      </select>
                    </div>

                    <div className="form-group mt-4">
                      <label htmlFor="imgField">Product Image</label>
                      <input
                        id="imgField"
                        name="product_image"
                        type="file"
                        className="form-control"
                        onChange={handleImageChange}
                        // value={formData.product_image}
                      />
                    </div>

                    <div className="form-group mt-4 text-center">
                      <button
                        onSubmit={handleSubmit}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* </div> */}
              {/* <button >Close Modal</button> */}
            </div>
            ;
          </ReactModal>
          <div>
            {location.pathname === "/loggedIn" ? (
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn btn-danger"
              >
                Create an auction
              </button>
            ) : (
              <div className="flex gap-4">
                <button type="button">
                  {isLoggedIn ? (
                    <NavLink
                      className="btn btn-primary  w-75 py-2  "
                      to="/login"
                    >
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink className="btn btn-danger py-2" to="/login">
                      Login
                    </NavLink>
                  )}
                </button>
                <NavLink to="register" className="btn btn-primary pt-2">
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <Outlet setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
};

export default Layout;
