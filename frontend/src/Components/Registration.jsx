import { useState } from "react";


export default function Registration() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = (event) => {
        // console.log("handleSubmt");
        // console.log(formData);
        event.preventDefault();
        const temp = JSON.stringify(formData);
        console.log(temp);
        fetch("http://localhost:5000/register",{ //register", {
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

                {/* <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                <a href="#" className="bg-black text-white font-bold text-xl p-4" alt="Logo">Logo</a>
            </div> */}

                <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                    <p className="text-center text-3xl">Join Us.</p>
                    <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                        {/* <div className="flex flex-col pt-4">
                            <label for="name" className="text-lg text-left">Name</label>
                            <input name="name" type="text" id="name" placeholder="Name" onChange={handleChange} value={formData.Name} className="shadow appearance-none border rounded w-full py-2 px-3 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div> */}

                        <div className="flex flex-col pt-4">
                            <label for="email" className="text-lg text-left">Email</label>
                            <input name="email" type="email" id="email" placeholder="Email" onChange={handleChange} value={formData.Email} className="shadow appearance-none border rounded w-full py-2 px-3 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="flex flex-col pt-4">
                            <label for="password" className="text-lg text-left">Password</label>
                            <input name="password" type="password" id="password" placeholder="Password" onChange={handleChange} value={formData.Password} className="shadow appearance-none border rounded w-full py-2 px-3 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="flex flex-col pt-4">
                            <label for="username" className="text-lg text-left">Username</label>
                            <input name="username" type="username" id="username" placeholder="username" onChange={handleChange} value={formData.Password} className="shadow appearance-none border rounded w-full py-2 px-3 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="flex flex-col pt-4">
                            <label for="address" className="text-lg text-left">Address</label>
                            <input name="address" type="address" id="address" placeholder="address" onChange={handleChange} value={formData.Password} className="shadow appearance-none border rounded w-full py-2 px-3 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="flex flex-col pt-4">
                            <label for="confirm-password" className="text-lg text-left" >Confirm Password</label>
                            <input name="confirmPassword" type="password" id="confirm-password" onChange={handleChange} value={formData.ConfirmPassword} placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <input type="submit" value="Login" className="bg-black text-white font-bold text-lg hovetext-white p-2 mt-8" />
                    </form>
                    <div className="text-center pt-12 pb-12">
                        {/* <p>Already have an account? <a href="login.html" className="underline font-semibold">Log in here.</a></p> */}
                    </div>
                </div>

            </div>

            <div className="w-1/2 shadow-2xl">
                <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt="Background" />
            </div>
        </div>
        // <div></div>
    );
}