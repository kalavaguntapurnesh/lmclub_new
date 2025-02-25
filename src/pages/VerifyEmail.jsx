import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const VerifyEmail = () => {
  const { backendUrl } = useContext(AppContext);

  const { token } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setMessage("Invalid Verification Link");
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get(
          backendUrl + `/api/user/verify-email?token=${token}`
        );

        setMessage(data.message);
        toast.success("Verification Successful");
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
        setMessage("Verification failed.");
        setLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  return (
    <div className="container">
      {loading ? <p>Verifying your email...</p> : <p>{message}</p>}
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
};

export default VerifyEmail;
