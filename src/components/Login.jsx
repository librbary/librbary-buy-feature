import React, { useState } from "react";
import styles from "../styles/UserCredentials.module.css";
import { Link } from "react-router-dom";
import formStyles from "../styles/Form.module.css";
import Google from "../assets/img/google.svg";
import Github from "../assets/img/github.svg";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="flex h-screen bg-primary">
        <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2 shadow-lg">
          <div className={styles.imgStyle}>
            <div className={styles.cartoonImg}></div>
            <div className={styles.cloud_one}></div>
            <div className={styles.cloud_two}></div>
          </div>
          <div className="right flex flex-col justify-evenly bg-white rounded-r-md">
            <div className="text-center py-10">
              <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                  <h1 className="text-gray-800 text-4xl font-bold py-4">
                    Sign In
                  </h1>
                  <p className="w-3/4 mx-auto text-gray-400">
                    Welcome to your best place!!
                  </p>
                </div>

                {/* form */}
                <form className="flex flex-col gap-5">
                  <div className={formStyles.input_group}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={formStyles.input_text}
                    />
                    <span className="icon flex items-center px-4">
                      <HiAtSymbol size={25} />
                    </span>
                  </div>
                  <div className={formStyles.input_group}>
                    <input
                      type={`${show ? "text" : "password"}`}
                      name="password"
                      placeholder="password"
                      className={formStyles.input_text}
                    />
                    <span
                      className="icon flex items-center px-4"
                      onClick={() => setShow(!show)}
                    >
                      <HiFingerPrint size={25} />
                    </span>
                  </div>

                  {/* login buttons */}
                  <div className="input-button">
                    <button type="submit" className={formStyles.button}>
                      Login
                    </button>
                  </div>
                  <div className="input-button flex items-center justify-center gap-2 w-full border py-3 hover:bg-secondary-400">
                    <button type="button">Sign In with Google </button>
                    <img src={Google} alt="google" className="w-5" />
                  </div>
                  <div className="input-button flex items-center justify-center gap-2 w-full border py-3 hover:bg-secondary-400">
                    <button type="button">Sign In with Github </button>
                    <img src={Github} alt="github" className="w-5" />
                  </div>
                </form>

                {/* bottom */}
                <p className="text-center text-gray-400 ">
                  Don't have an account yet?{" "}
                  <Link to={"/register"}>
                    <a className="text-blue-700">Sign Up</a>
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
