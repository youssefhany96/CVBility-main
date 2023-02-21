import React, { useState, useContext, Fragment } from "react";
import Close from "../assets/Close";
import login from "../assets/login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import TemplateContext from "../context/TemplateContext";
import { Alert } from "@material-tailwind/react";
export default function Modal(props) {
  const { Refresh,Login, UserRegister } = useContext(TemplateContext);
  const [showAlert, setShowAlert] = useState(false);
  const [Rerror, setRerror] = useState(null)

  const modal = props.modal;
  const setmodal = props.setmodal;
  const setregister = props.setregister;
  const register = props.register;

  const handleLogin = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    Login(values)
      .then(() => {
        setInterval(()=>{
             Refresh();
             console.log("Refreshed");
        },60000)
        setmodal(false)
    })
      .catch(() =>
        document.getElementById("loginError").classList.remove("hidden")
      );
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    if (values.password !== values.password2) {
      document.getElementById("passwordError").classList.remove("hidden");
    } else {
      UserRegister(values)
        .then(() => {
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 2000);
          setmodal(false);
        })
        .catch((err) => {
          setRerror(err.response.data.errors)
          if(Rerror?.email){
          const x = document.getElementById("emailError");
          x.classList.remove("hidden");}
          else if(Rerror?.phone){
          const y = document.getElementById("PhoneError");
          y.classList.remove("hidden");}
          else if(Rerror?.password){
            const y = document.getElementById("passwordError");
            y.classList.remove("hidden");}
        });
    }
  };
  return (
    <>
      <Fragment>
        <Alert
          show={showAlert}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
          dismissible={{
            onClose: () => setShowAlert(false),
          }}
        >
          Successfully Registered.
        </Alert>
      </Fragment>

      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto  mx-auto ">
              {/*content*/}
              <div className="justify-between rounded-lg shadow-lg relative flex flex-row w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="sm:invisible lg:visible md:visible xl:visible">
                  <img src={login} alt="" className="h-[36rem]" />
                </div>

                <div className="p-6 flex-col lg:w-1/2 md:w-1/2 xl:w-1/2">
                  <div className=" text-center rounded-md">
                    <button
                      className={`px-2 py-1 lg:mr-2 ${
                        register ? "text-white" : "text-[#A8A8A8]"
                      } ${register ? "bg-primary" : ""} rounded-md  text-sm`}
                      onClick={() => setregister(true)}
                    >
                      Register
                    </button>
                    <button
                      className={`px-2 py-1 lg:mr-2 ${
                        !register ? "text-white" : "text-[#A8A8A8]"
                      } ${!register ? "bg-primary" : ""} rounded-md  text-sm`}
                      onClick={() => setregister(false)}
                    >
                      Login
                    </button>
                  </div>

                  {register ? (
                    <div className="mt-10 text-center flex-col">
                      <h1 className="text-black text-2xl">
                        Welcome to CVbility
                      </h1>
                      <p className="mt-2 text-sm">
                        Please enter your details to register !
                      </p>
                      <form onSubmit={handleRegister}>
                        <div className="mt-8 lg:flex md:flex xl:flex lg:space-x-2 lg:space-y-0 md:space-y-0 xl:space-y-0 sm:space-y-3">
                          <input
                            required
                            name="first_name"
                            className="rounded-md h-10 placeholder:text-sm p-3 border border-gray-500"
                            type="text"
                            placeholder="First name"
                          />
                          <input
                            required
                            name="last_name"
                            className="rounded-md h-10 placeholder:text-sm p-3 border border-gray-500"
                            type="text"
                            placeholder="Last name"
                          />
                        </div>

                        <div className="mt-4 lg:flex md:flex xl:flex lg:space-x-2 lg:space-y-0 md:space-y-0 xl:space-y-0 sm:space-y-3">
                          <div className="flex flex-col">
                            <input
                              required
                              name="email"
                              onClick={() =>
                                document
                                  .getElementById("emailError")
                                  .classList.add("hidden")
                              }
                              className="rounded-md h-10 placeholder:text-sm p-3 border border-gray-500"
                              type="email"
                              placeholder="Email"
                            />
                            <p
                              id="emailError"
                              className="hidden text-red-600 text-start text-sm my-2 "
                            >
                               {Rerror?.email?Rerror.email[0]:null}
                            </p>
                          </div>
                          <div className="flex flex-col">
                          <input
                            required
                            name="phone"
                            onClick={() =>
                              document
                                .getElementById("PhoneError")
                                .classList.add("hidden")}
                            className="rounded-md h-10 placeholder:text-sm p-3 border border-gray-500"
                            type="number"
                            placeholder="Phone #"
                          />
                            <p
                              id="PhoneError"
                              className="hidden text-red-600 text-start text-sm my-2 "
                            >
                               {Rerror?.phone?Rerror.phone[0]:null}
                            </p>
                          </div>

                         
                        </div>

                        <div className="mt-4 lg:flex md:flex xl:flex lg:space-x-2 lg:space-y-0 md:space-y-0 xl:space-y-0 sm:space-y-3">
                          <div className="flex flex-col">
                            <input
                              required
                              name="password"
                              onClick={() =>
                                document
                                  .getElementById("passwordError")
                                  .classList.add("hidden")
                              }
                              className="rounded-md h-10 placeholder:text-sm p-3 border border-gray-500"
                              type="password"
                              placeholder="Password"
                            />
                            <p
                              id="passwordError"
                              className="hidden text-red-600 text-start text-sm my-2 "
                            >
                              {Rerror?.password?Rerror.password[0]:       "Passwords didn't match!"}
                            </p>
                          </div>

                          <input
                            required
                            name="password2"
                            className="rounded-md h-10 placeholder:text-sm p-3 border border-gray-500"
                            type="password"
                            placeholder="Conform Password"
                          />
                        </div>

                        <div className="mt-3 lg:flex md:flex xl:flex lg:space-x-2 lg:space-y-0 md:space-y-0 xl:space-y-0 sm:space-y-3">
                          <input
                            required
                            name="tc"
                            id="tc"
                            className=""
                            type="checkbox"
                            value="True"
                          />
                          <label
                            for="tc"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            I consent to the Terms & Privacy Policy
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-2 text-center bg-primary text-sm text-white my-3 rounded-md"
                        >
                          Register
                        </button>
                      </form>

                      <div>
                        <h1 className="text-center">or</h1>
                      </div>
                      <button className="w-full py-2 text-center bg-[#D9D9D9] text-black text-sm my-3 rounded-md">
                        <span className="mr-2">
                          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                        </span>{" "}
                        Sign up with google
                      </button>

                      <div className="mt-3">
                        <p className="text-[#A8A8A8] text-[0.600rem]">
                          A password can be set after you sign up if you prefer.
                          Meanwhile, your information is secure and private.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-10 text-center flex-col">
                      <h1 className="text-black text-2xl">Log in</h1>
                      <p className="mt-2 text-sm">
                        Please enter your credentials to continue !
                      </p>
                      <form onSubmit={handleLogin}>
                        <div className="mt-10 flex flex-col space-y-5">
                          <p
                            id="loginError"
                            className="hidden text-red-600 text-center text-sm my-2 "
                          >
                            Please Enter correct credentials !
                          </p>
                          <input
                            required
                            id="loginEmail"
                            onClick={() =>
                              document
                                .getElementById("loginError")
                                .classList.add("hidden")
                            }
                            name="email"
                            className="rounded-md h-10 placeholder:text-sm p-3 border border-gray-500"
                            type="email"
                            placeholder="Email"
                          />
                          <input
                            required
                            id="loginPassword"
                            onClick={() =>
                              document
                                .getElementById("loginError")
                                .classList.add("hidden")
                            }
                            name="password"
                            className="rounded-md h-10 placeholder:text-sm p-3 border border-gray-500"
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                        <button
                          type="submit"
                          onSubmit={handleLogin}
                          className="w-full py-2 text-center bg-primary text-sm text-white my-3 mt-7 rounded-md cursor-pointer"
                        >
                          Log in
                        </button>
                      </form>

                      <div>
                        <h1 className="text-center">or</h1>
                      </div>
                      <button className="w-full py-2 text-center bg-[#D9D9D9] text-black text-sm my-3 rounded-md">
                        <span className="mr-2">
                          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                        </span>{" "}
                        Log in with google
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <button
                    className=" justify-end ml-auto bg-transparent border-0 text-black opacity-20 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setmodal(false)}
                  >
                    <Close></Close>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
