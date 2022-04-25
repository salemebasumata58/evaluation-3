import { AuthContext } from "./contexts/Authcontext"
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
export const Login = () => {
    //  use reqres to log user in.
    const {handleAuth} = useContext(AuthContext);
   const navigate = useNavigate();
  
    return (
      <form className="loginform">
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <button
         onClick={()=>{
            handleAuth(true);
            navigate(-2, { replace:true })
         }}>submit</button>
        {/* // type="submit" value="SIGN IN" className="login_submit"  */}
      </form>
    );
  };