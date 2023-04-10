import React, { useState } from 'react';
import CustomLink from '../CustomLink';

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
      {
        username: "*",
        password: "*"
      },
      {
        username: "Jason",
        password: "sex"
      }
    ];

    const errors = {
      uname: "FLASCHER USER",
      pass: "FLASCHES PASSWORT"
    };

    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();

      var { uname, pass } = document.forms[0];

      // Find user login info
      const userData = database.find((user) => user.username === uname.value);

      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
        );
    
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("uname")}
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="login-content">
            <div className="login-form">
                {isSubmitted ? <CustomLink className='back-home' to='/home'>Return to Home</CustomLink> : renderForm}
            </div>
        </div>
    );
};

export default Login;