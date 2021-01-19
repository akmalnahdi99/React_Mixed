import React from "react";
import { Link, Redirect  } from "react-router-dom";
import { AppContext } from "../../context/settings";
import { apiCall } from "../../utils/landlordHelper";
 
export default function ForgotPassword(props) {
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [infoMsg, set_infoMsg] = React.useState(null);
  const [isDone, set_isDone] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);
  const [form, set_form] = React.useState({ userId: "" });
  const {
 
    settings: { isLogged },
  } = React.useContext(AppContext);

  React.useEffect(() => {});

  // if (isDone === true) {
  //   console.log("done forgot password so, redirect to login");
  //   return <Redirect to="/login"></Redirect>;
  // }
  if (isLogged === true) {
    console.log("user is logged so goto login");
    return <Redirect to="/login"></Redirect>;
  }

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    var formData = { ...form, [name]: value };
    console.log("formData", formData);
    set_form(formData);
  };

  const handleSubmit = async (e) => {
    console.log("in handle sumbit");
    e.preventDefault();
    if (form.userId !== "") {
      setIsLoading(true);
      var result = await apiCall("/users/forgotPassword", "POST", form.userId);

      if (result.status === true) {
        set_isDone(true);
        set_infoMsg(result.data);
      } else {
        debugger;
        setErrorMsg(result.data);
      }
      setIsLoading(false);
    } else {
      setErrorMsg("Please enter valid email");
    }
  };

  return (
    <div className="loginbg doorcasedark-bg">
      <div className="middle-box text-center   animated fadeInDown">
        <div>
          <img alt="dr-logo" src="/imgs/doorcase-logo.png" className="img-fluid" />
        </div>
        <div className="ibox-content mt-3 mx-2">
          <h2 className="font-bold mt-5">Forgot password</h2>

          {isDone === false ? (
            <React.Fragment>
              <p>Enter your email address and your password will be reset and emailed to you.</p>

              <div className="row">
                <div className="col-lg-12">
                  <form className="m-t" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input type="email" className="form-control" autoComplete="username" placeholder="Email address" required="" name="userId" onChange={(e) => handleChange(e)} disabled={isLoading} />
                    </div>

                    <button type="submit" className="btn btn-primary block full-width m-b" disabled={isLoading}>
                      Send password reset link
                    </button>
                  </form>
                </div>
              </div>
              {errorMsg !== null ? <p style={{ color: "red" }}>{errorMsg}</p> : ""}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {infoMsg !== null ? (
                <p className="mt-4" style={{ color: "green" }}>
                  {infoMsg}
                </p>
              ) : (
                ""
              )}
              <Link to="login" className="btn btn-primary block full-width m-b">
                Login
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
