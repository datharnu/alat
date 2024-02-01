import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "", // Add a colon here
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section>
      {/* Title */}
      <div className="text-center my-28">
        <h1 className="text-pink-700">Go to ALAT Website</h1>
      </div>
      {/* Form */}
      <div className="mx-28  space-y-2 ">
        <h1 className="font-">Welcome Back!</h1>
        <div>
          <span className="border-2 flex pr-6 fixed border-pink-700 "></span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="text-center space-y-10 my-10">
        {/*  Username Input */}
        <div className="space-y-3">
          <div className="text-xs text-gray-300">
            <label htmlFor="name">Email Address/Username</label>
          </div>

          <input
            type="text"
            id="name"
            name="username" // Change the name attribute to "username"
            value={formData.username}
            onChange={handleChange}
            required
            className="border-[1px] rounded-sm px-28"
          />
        </div>
        {/* Password  */}
        <div className="space-y-3">
          <div className="text-xs flex justify-center gap-56 text-gray-300">
            <label htmlFor="password">Password</label>
            <label className="text-pink-700">Forgot password?</label>
          </div>
          <input
            type="password" // Use type="password" for password input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border-[1px] rounded-sm px-28"
          />
        </div>
        {/* Login Button */}
        <button
          type="submit"
          className="bg-pink-700 text-white  text-xs px-28 py-2 rounded-sm"
        >
          Login
        </button>
      </form>
      {/* Footer */}
      <article>
        <div>
          <p className="text-xs flex justify-center">
            New to ALAT? <span className="text-red-700"> Sign up</span>
          </p>
        </div>

        <div className="text-xs flex justify-between mx-28 mt-20 text-red-700">
          <span>help@alat.ng</span>
          <span>070022552528</span>
        </div>
      </article>
    </section>
  );
}
