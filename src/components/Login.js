import React, { useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import img from "../components/Images/login.png";
import { handleApi } from "../state/action-creators";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);

  console.log("111111")

  const submitHandler = () => {
  
    setLoading(true);
    dispatch(handleApi({ email, password })).then((res) => {
      if (res.data.name) {
        localStorage.setItem("login", JSON.stringify(res.data));

        navigate("/maincontainer");
      } else {
        alert("please enter correct details");
        setLoading(false);
      }
    });
  };

  return (
    <>
      {Loading ? (
        <Spinner />
      ) : (
        <div
          style={{
            height: "100%",
            background: "white",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "1040px",
              height: "449px",
              background: "#dee2e6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <img
                  style={{
                    width: "660px",
                  }}
                  src={img}
                  alt="login.png"
                />
              </div>
              <div
                className="inputforlogin"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "inherit",
                }}
              >
                <div>
                  <label
                    for="email"
                    style={{ position: "relative", right: "17px" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    // ref={textInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                  <br />
                  <label
                    for="pwd"
                    style={{ position: "relative", right: "17px" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="pwd"
                    value={password}
                    // ref={textInput}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                  />
                  <br />
                  <div
                    style={{ position: "relative", left: "75px", top: "11px" }}
                  >
                    {" "}
                    <button onClick={submitHandler} className="loginbtn">
                      LOGIN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
