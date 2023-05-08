import React from "react";
// import AuctionImage from "../../public/images/AuctionImage.jpeg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Login = (props) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (event) => {
        // console.log("handleSubmt");
        // console.log(formData);
        event.preventDefault();
        const temp = JSON.stringify(formData);
        console.log(temp);
        fetch("http://localhost:5000/login", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" ,
            "Access-Control-Allow-Origin": "*"},
            body: JSON.stringify(formData),
            // body: {'test':'test'}
            // body: (formData)
        })
            // .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    return (
        <div className="w-full flex flex-wrap ml-20">
            <div className="w-full md:w-1/2 flex flex-col">
                {/* <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24 ">
          <a href="#" className="bg-black text-white font-bold text-xl p-4 rounded-2xl no-underline">
            AuctionHub
          </a>
        </div> */}

                <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                    <p className="text-center text-3xl">Welcome.</p>
                    <form
                        className="flex flex-col pt-3 md:pt-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col pt-4">
                            <label for="email" className="text-lg text-left">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                id="email"
                                placeholder="Email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="flex flex-col pt-4">
                            <label for="password" className="text-lg text-left">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                                id="password"
                                placeholder="Password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <NavLink>
                            <input
                                type="submit"
                                onClick={handleSubmit}
                                // onClick={() => {
                                //     setIsLoggedIn(!isLoggedIn);
                                // }}
                                value="Log In"
                                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                            />
                        </NavLink>
                    </form>
                    <div className="text-center pt-12 pb-12">
                        <p>
                            Do not have an account?{" "}
                            <a href="register.html" className="underline font-semibold">
                                Register here.
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-1/2 shadow-2xl">
                <img
                    className="object-cover w-full h-screen hidden md:block"
                    src="https://source.unsplash.com/IXUM4cJynP0"
                // src={AuctionImage}
                />
            </div>
        </div>
        // <div></div>
    );
};
export default Login;