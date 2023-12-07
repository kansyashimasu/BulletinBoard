import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  // ログイン機能
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      // HOMEコンポーネントに遷移
      navigate("/");
    });
  };

  return (
    <div className="login">
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
