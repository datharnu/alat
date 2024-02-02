import { useState, ChangeEvent, FormEvent } from "react";
import AlatLogo from "../public/AlatLogo.jpeg";
import Cbn from "../public/centralbank.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface FormData {
  username: string;
  password: string;
}

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const [isUsernameValid, setIsUsernameValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Reset validation when the user starts typing
    setIsUsernameValid(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the form fields
    if (!formData.username) {
      setIsUsernameValid(true);
      return;
    }
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Reload the page to reset the form
    window.location.reload();
  };

  return (
    <section className="flex  ">
      <article className="lg:w-[55%] md:w-[45%] sm:hidden">
        <div className="bg-bgImg h-screen relative bg-cover flex items-center justify-center">
          <div className="text-white  text-left absolute bottom-20">
            {/* Talk to Us */}
            <div className="mb-5">
              <h1>Talk to Us</h1>
              <p className="font-thin  text-sm">We are happy to assist</p>
            </div>
            {/* email and Number */}
            <div className="flex mb-5 gap-5 text-white">
              <div className="flex items-center gap-3 text-sm font-thin">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.83236 5.1236C2.07386 5.29401 2.80183 5.80014 4.0163 6.64173C5.23081 7.48333 6.16121 8.13133 6.80754 8.58578C6.87855 8.6356 7.02941 8.74388 7.2602 8.91079C7.49103 9.07781 7.68282 9.21278 7.83544 9.31573C7.98817 9.41864 8.1728 9.53409 8.38952 9.66189C8.60617 9.78958 8.81039 9.88563 9.00215 9.94921C9.19395 10.0133 9.37149 10.0451 9.53481 10.0451H9.54552H9.55627C9.71959 10.0451 9.89721 10.0133 10.089 9.94921C10.2807 9.88563 10.4851 9.78947 10.7016 9.66189C10.9181 9.53394 11.1028 9.4186 11.2555 9.31573C11.4082 9.21278 11.5999 9.07781 11.8308 8.91079C12.0615 8.74373 12.2126 8.6356 12.2836 8.58578C12.9369 8.13133 14.599 6.97715 17.2694 5.12337C17.7878 4.76131 18.2209 4.32443 18.5689 3.81304C18.9171 3.30187 19.091 2.76562 19.091 2.2046C19.091 1.73578 18.9223 1.33446 18.5849 1.00069C18.2475 0.666833 17.8479 0.5 17.3864 0.5H1.70449C1.15764 0.5 0.736811 0.684632 0.442064 1.0539C0.147355 1.42323 0 1.88489 0 2.43882C0 2.88626 0.195378 3.37112 0.585949 3.89312C0.976482 4.41514 1.39209 4.82534 1.83236 5.1236Z"
                    fill="white"
                  ></path>
                  <path
                    d="M18.0256 6.26349C15.6963 7.84006 13.9275 9.06532 12.7203 9.939C12.3155 10.2372 11.9871 10.4699 11.7349 10.6367C11.4827 10.8036 11.1472 10.9741 10.7281 11.148C10.3092 11.3222 9.9187 11.409 9.55642 11.409H9.54556H9.53485C9.17264 11.409 8.78196 11.3222 8.36299 11.148C7.94402 10.9741 7.60838 10.8036 7.35625 10.6367C7.10419 10.4699 6.77567 10.2372 6.37088 9.939C5.41201 9.23592 3.64711 8.01059 1.07611 6.26349C0.671175 5.99378 0.312509 5.68463 0 5.33667V13.7953C0 14.2643 0.166833 14.6654 0.500685 14.9992C0.834463 15.3332 1.23582 15.5001 1.7046 15.5001H17.3866C17.8553 15.5001 18.2566 15.3332 18.5904 14.9992C18.9243 14.6653 19.0911 14.2644 19.0911 13.7953V5.33667C18.7856 5.67743 18.4306 5.98658 18.0256 6.26349Z"
                    fill="white"
                  ></path>
                </svg>
                <a href="mailto:help@alat.ng">help@alat.ng</a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4949 10.4229C11.0048 9.93905 10.393 9.93905 9.90612 10.4229C9.53468 10.7912 9.16323 11.1595 8.79803 11.5341C8.69815 11.6371 8.61387 11.6589 8.49214 11.5903C8.2518 11.4592 7.99585 11.353 7.76487 11.2094C6.688 10.5321 5.78593 9.66125 4.98686 8.68115C4.59045 8.19422 4.23773 7.67295 3.99115 7.08613C3.9412 6.96752 3.95057 6.88949 4.04733 6.79273C4.41877 6.43377 4.78085 6.06545 5.14605 5.69713C5.65483 5.18523 5.65483 4.58593 5.14293 4.0709C4.85264 3.7775 4.56235 3.49033 4.27207 3.19692C3.97242 2.89727 3.67589 2.5945 3.37312 2.29797C2.88306 1.8204 2.27128 1.8204 1.78435 2.30109C1.40978 2.66941 1.05083 3.0471 0.670022 3.40918C0.317309 3.74316 0.139391 4.15206 0.101935 4.62963C0.0426292 5.40684 0.233032 6.14036 0.501469 6.85515C1.05083 8.33468 1.88735 9.64877 2.90179 10.8536C4.27207 12.483 5.90766 13.7721 7.82105 14.7022C8.68254 15.1205 9.57525 15.442 10.546 15.4951C11.214 15.5325 11.7945 15.364 12.2596 14.8427C12.578 14.4869 12.937 14.1622 13.2741 13.822C13.7735 13.3164 13.7766 12.7046 13.2803 12.2052C12.6872 11.609 12.0911 11.0159 11.4949 10.4229Z"
                    fill="white"
                  ></path>
                  <path
                    d="M10.8987 7.93515L12.0505 7.73851C11.8694 6.68037 11.37 5.72211 10.6115 4.9605C9.80933 4.15831 8.79489 3.65265 7.67745 3.49658L7.51514 4.65461C8.37975 4.77634 9.16633 5.16651 9.78748 5.78766C10.3743 6.37447 10.7582 7.11736 10.8987 7.93515Z"
                    fill="white"
                  ></path>
                  <path
                    d="M12.6996 2.92842C11.3699 1.59872 9.68749 0.759073 7.83028 0.5L7.66797 1.65802C9.27235 1.88276 10.7269 2.61004 11.8756 3.75558C12.9649 4.84493 13.6797 6.22145 13.9388 7.7353L15.0906 7.53866C14.7878 5.78446 13.9606 4.19256 12.6996 2.92842Z"
                    fill="white"
                  ></path>
                </svg>
                <p className="MuiTypography-root MuiTypography-body1 MuiTypography-colorInherit text-sm font-thin">
                  070022552528
                </p>
              </div>
            </div>

            {/* Social media */}
            <div className="flex gap-5">
              {/* Instagram */}
              <div className=" ">
                <i className="fab fa-instagram"></i>
              </div>
              {/* Facebook */}
              <div>
                <i className="fab fa-facebook"></i>
              </div>
              {/* Twitter */}
              <div>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="  ">
        {/* Title */}
        <div className="text-center my-20">
          <h1 className="text-primary sm:text-lg ">Go to ALAT Website</h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-7 sm:mx-10 ">
          {/* Logo */}

          <article className="flex gap-5 mt-16 -ml-36 sm:-mt-2 ">
            <div>
              <img src={AlatLogo} className="w-12" />
            </div>
            <div className="relative top-4">
              <h1 className="text-textS text-sm sm:text-lg ">
                Licensed by the CBN
              </h1>
            </div>
            <div className="relative top-3 -left-3">
              <img src={Cbn} className="w-6" />
            </div>
          </article>

          {/* Form */}
          <div className="">
            <h1 className=" text-xl sm:text-2xl -ml-48">Welcome Back!</h1>
            {/* <hr className="mr-[70rem] relative border-primary border-2" /> */}
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Username Input */}
            <div className="space-y-3">
              <div className="text-sm sm:text-lg text-textS font-light">
                <label htmlFor="username">Email Address/Username</label>
              </div>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className={`border-[1px] rounded-sm focus:outline-none focus:ring-1 focus:bg-gray-100 focus:invalid:ring-gray-400 pr-[13rem] py-2 
            ${!isUsernameValid ? "border-primary" : ""}
          `}
                style={{ textAlign: "left" }}
              />
              {/* {!isUsernameValid && (
              <p className="text-primary text-xs mt-1">
                Please provide a valid email address
              </p>
            )} */}
            </div>
            {/* Password */}
            <div className="space-y-3 font-light">
              <div className=" text-sm sm:text-lg flex justify-between">
                <label htmlFor="password" className="text-textS">
                  Password
                </label>
                <label className="text-primary">Forgot password?</label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`border-[1px] rounded-sm focus:outline-none focus:ring-1 focus:bg-gray-100 focus:invalid:ring-gray-400 pr-[13rem] py-2`}
              />
            </div>
            {/* Login Button */}
            <div className="cursor-pointer text-white text-sm  ">
              <button
                type="submit"
                className="rounded-[3px] sm:text-lg font-thin bg-primary px-[10.7rem] text-center py-3 shadow-textS shadow-sm"
              >
                Login
              </button>
            </div>
          </form>
          {/* Footer */}
          <article>
            <div className="mt-2 text-center">
              <p className="text-sm sm:text-lg  font-thin">
                New to ALAT?
                <span className="text-primary font-normal">Sign up</span>
              </p>
            </div>

            <div className=" text-primary sm:text-lg lg:mt-40 sm:mt-10 sm:flex sm:gap-44 flex justify-between">
              <p>help@alat.ng</p>
              <p>070022552528</p>
            </div>
          </article>
        </div>
      </article>
    </section>
  );
}
