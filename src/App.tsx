import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  username: string;
  password: string;
}

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
      <div className="mx-28 space-y-2">
        <h1 className="font-bold text-lg">Welcome Back!</h1>
        <div>
          <span className="border-2 flex pr-6 fixed border-pink-700"></span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="text-center space-y-10 my-10">
        {/* Username Input */}
        <div className="space-y-3">
          <div className="text-xs text-gray-300">
            <label htmlFor="username">Email Address/Username</label>
          </div>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="border-[1px] rounded-sm px-28"
          />
        </div>
        {/* Password */}
        <div className="space-y-3">
          <div className="text-xs flex justify-center gap-56 text-gray-300">
            <label htmlFor="password">Password</label>
            <label className="text-pink-700">Forgot password?</label>
          </div>
          <input
            type="password"
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
          className="bg-pink-700 text-white text-xs px-28 py-2 rounded-sm"
        >
          Login
        </button>
      </form>
      {/* Footer */}
      <article>
        <div>
          <p className="text-xs flex justify-center">
            New to ALAT? <span className="text-red-700">Sign up</span>
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
