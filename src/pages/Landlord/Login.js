import React from "react";
import { Link, Redirect } from "react-router-dom";
import { AppContext } from "../../context/settings";
import { apiCall } from "./../../utils/landlordHelper";
import { config } from "./../../constants";
import Cookies from "js-cookie";

export default function Login() {
  const { updateAppContext, settings } = React.useContext(AppContext);

  const [user, setUser] = React.useState({ userId: "", password: "" });
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { accessToken, isLogged } = settings;
  var { apiUrl } = config;

  // when user change name or password or any imput
  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    var newUser = { ...user, [name]: value };
    setUser(newUser);
  };

  // handle from submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.userId !== "" && user.password !== "") {
      authenticate();
    } else {
      setErrorMsg("please enter a userId & password");
    }
  };

  // if user already logged redirect him directly to main activites.
  if (isLogged === true && accessToken !== null) {
    return <Redirect to="/landlord/activity"></Redirect>;
  }

  const authenticate = () => {
    var userId = user.userId;
    var password = user.password;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userId, password, userType: "tenant" }),
    };
    setIsLoading(true);
    fetch(apiUrl + "/users/authenticate", requestOptions)
      .then(async (resp) => {
        if (resp.status === 200) {
          var token = await resp.json();
          Cookies.set("jwtToken", token);

          var response = await apiCall("/users/info");

          var activeUnitId = null;
          var quickLinks = null;
          var notificationsCount = 0;
          if (response.data.units.length > 0) {
            activeUnitId = response.data.unitsIds[0];
            quickLinks = response.data.quickLinks;
            notificationsCount = response.data.notificationsCount;
          }
          updateAppContext({ postsFilter: "All", accessToken: token, isLogged: true, userInfo: response.data, activeUnitId, quickAccessList: quickLinks, notificationsCount });
        } else {
          throw new Error(resp.statusText);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg("Id or password is not correct");
      })
      .finally((f) => {
        setIsLoading(false);
      });

    return;
  };

  return (
    <div className="loginbg doorcasedark-bg">
      <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <img alt="dr-logo" src="/imgs/doorcase-logo.png" className="img-fluid" />
        </div>
        <div className="text-white">
          <h3>Welcome to Doorcares</h3>
          <p className="font-light">Login | Finger tip tenant management</p>
        </div>
        <form className="m-t" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" required="" name="userId" autoComplete="username" value={user.userId} onChange={(e) => handleChange(e)} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="" name="password" autoComplete="current-password" value={user.password} onChange={(e) => handleChange(e)} />
          </div>
          <button type="submit" className="btn btn-primary block full-width m-b" disabled={isLoading}>
            Login
          </button>
          {errorMsg !== null ? <p style={{ color: "red" }}>{errorMsg}</p> : ""}
          <Link to="/forgotPassword" className="btn btn-sm btn-link btn-block">
            <small>Forgot password?</small>
          </Link>
        </form>
      </div>
    </div>
  );
}
