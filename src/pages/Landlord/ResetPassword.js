import React from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { AppContext } from "../../context/settings";
import { apiCall } from "../../utils/landlordHelper";
import { parseUrl } from "query-string";
export default function ResetPassword(props) {
  var location = useLocation().search;
  var query = parseUrl(location).query;

  const [errorMsg, setErrorMsg] = React.useState(null);
  const [isDone, set_isDone] = React.useState(false);
  const [infoMsg, set_infoMsg] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(false);
  const [form, set_form] = React.useState({ newPassword: "", newPasswordConfirmation: "", userId: "", token: "" });
  const {
 
    settings: { isLogged },
  } = React.useContext(AppContext);

  React.useEffect(() => {});

  if (!query.userId || !query.token) {
  
    return <Redirect to="/login"></Redirect>;
  }
 

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    var formData = { ...form, [name]: value };
    formData.userId = query.userId;
    formData.token = query.token;
 
    set_form(formData);
  };

  const handleSubmit = async (e) => {
 
    e.preventDefault();
    if (form.newPassword !== "" && form.newPasswordConfirmation !== "") {
      if (form.newPassword !== form.newPasswordConfirmation) {
        setErrorMsg("passwords does not match !");
        return;
      }
      setIsLoading(true);
      var result = await apiCall("/users/resetPassword", "POST", form);

      if (result.status === true) {
        set_infoMsg("Your password is updated please log in with the new one");
        set_isDone(true);
      } else {
        setErrorMsg(result.data);
      }
      setIsLoading(false);
    } else {
      setErrorMsg("please key in both passwords");
    }
  };

  if (isLogged === true) {
    
    // updateAppContext({ accessToken: null, isLogged: false });
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div className="loginbg doorcasedark-bg">
      <div className="middle-box text-center loginscreen  animated fadeInDown">
        <div>
          <img alt="dr-logo" src="/imgs/doorcase-logo.png" className="img-fluid" />
        </div>
        {isDone === true ? (
          <React.Fragment>
            <p className="my-4" style={{ color: "white" }}>
              {infoMsg}
            </p>

            <Link to="login" className="btn btn-primary block full-width m-b">
              Login
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="text-white">
              <h3>Password Reset</h3>
              <p className="font-light">Please Enter you new password twice</p>
            </div>
            <form className="m-t" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="New Password" required="" name="newPassword" autoComplete="" value={form.newPassword} onChange={(e) => handleChange(e)} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password Confirmation" required="" name="newPasswordConfirmation" autoComplete="" value={form.newPasswordConfirmation} onChange={(e) => handleChange(e)} />
              </div>
              <button type="submit" className="btn btn-primary block full-width m-b" disabled={isLoading}>
                Update Password
              </button>
              {errorMsg !== null ? <p style={{ color: "red" }}>{errorMsg}</p> : ""}
            </form>
            <Link to="/login" className="btn btn-sm btn-link btn-block">
              <small>Login</small>
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
