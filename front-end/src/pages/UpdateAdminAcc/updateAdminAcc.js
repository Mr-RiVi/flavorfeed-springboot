import { useState, useEffect, useRef } from "react";
import axios from "axios";

import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/styles/signup.css";

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const UPDATE_URL =
  "http://localhost:3000/api/admin/update-admin/6461f1049a2b54297072c27d";

const USERS_FETCH_URL =
  "http://localhost:3000/api/admin/6461f1049a2b54297072c27d";

const UpdateAdminAcc = () => {
  const errRef = useRef();

  const [name, setName] = useState("");

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);
  const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [account, setAccount] = useState({});

  useEffect(() => {
    setValidUsername(USERNAME_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatchPassword(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [username, email, password, matchPassword]);

  //this function fetching admin profile data
  const fetchAccount = async () => {
    try {
      const response = await axios.get(USERS_FETCH_URL);
      if (response?.status >= 200 && response?.status < 300) {
        setAccount(response.data);
        console.log(account);
        setName(response.data.fullName);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setPassword(response.data.password);

        // successful response
        console.log("Response is successful");
      } else {
        // unsuccessful response
        console.log("Error: " + response.status + " " + response.statusText);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  //this function updating admin profile
  const handleupdate = async (e) => {
    e.preventDefault();
    // if signup button enabled with JS hack? so we check again username and password is valid or not
    const v1 = USERNAME_REGEX.test(username);
    const v2 = PASSWORD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.patch(
        UPDATE_URL,
        {
          fullName: "hashan224",
          username: "nimal123",
          email: "nimal@gmail.com",
          password: "1234nimal",
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (!response?.data) console.log("updation unsuccessfull");
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setMatchPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Updation Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 align="center">Update</h1>
          <form onSubmit={handleupdate}>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            ></input>
            <p></p>
            <label htmlFor="username">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validUsername ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validUsername || !username ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              aria-invalid={validUsername ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
            />
            <p
              id="uidnote"
              className={
                usernameFocus && username && !validUsername
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            <label htmlFor="email">
              Email:
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail || !email ? "hide" : "invalid"}
              />
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="emailnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="emailnote"
              className={
                emailFocus && email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Enter valid Email
              <br />
            </p>
            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPassword || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                passwordFocus && !validPassword ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="confirm_password">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validMatchPassword && matchPassword ? "valid" : "hide"
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validMatchPassword || !matchPassword ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="password"
              id="confirm_password"
              onChange={(e) => setMatchPassword(e.target.value)}
              value={matchPassword}
              required
              aria-invalid={validMatchPassword ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchPasswordFocus(true)}
              onBlur={() => setMatchPasswordFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchPasswordFocus && !validMatchPassword
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
            <div className="signup_button">
              <button
                className="button"
                disabled={
                  !validUsername || !validPassword || !validMatchPassword
                    ? true
                    : false
                }
              >
                Update
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default UpdateAdminAcc;
