import React from "react";
import AuctionImage from "../../public/images/AuctionImage.jpeg";
import {NavLink} from "react-router-dom";
const Login = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;
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
            onSubmit={(event)=>{
              event.preventDefault()}}
          >
            <div className="flex flex-col pt-4">
              <label for="email" className="text-lg text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label for="password" className="text-lg text-left">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <NavLink>
              <input
                type="submit"
                onClick={() => {
                  setIsLoggedIn(!isLoggedIn);
                }}
                value="Log In"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              />
            </NavLink>
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Don't have an account?{" "}
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
