import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import Swal from 'sweetalert2';
import success from "../assets/success.png";
import Logo from "../assets/LMDark.webp";
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

  const style = document.createElement('style');
  style.innerHTML = `
    .swal-custom-ok-button {
      background-color:rgb(27, 202, 103); /* Custom color */
      color:white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
    }

    .swal-custom-ok-button:hover {
      background-color:rgb(18, 91, 25); /* Hover color */
    }
  `;
  document.head.appendChild(style);
  // {loading ? <p>Verifying your email...</p> : <p>{message}</p>}

Swal.fire({
  html: `
    <div style="display: flex; flex-direction: column; align-items: center;">
      <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
        <img src="${Logo}" alt="Success" 
          style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
        <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
          <span style="color: black;">LM</span>
          <span style="color: rgb(37, 218, 73);">Club</span>
        </h4>
      </div>

       ${!loading ? `
        <div style="margin-bottom: 20px;">
          <img src="${success}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
        </div>
      ` : ""}

      <!-- Dynamic Content Based on Loading State -->
      <div style="width: 100%; text-align: center;">
        <h1 style="margin: 0; font-size: 30px;">
          ${loading ? "Verifying your email..." : "Email Verified Successfully"}
        </h1>
      </div>

     
    </div>
  `,
  timer: loading ? undefined : 60000,
  timerProgressBar: !loading,
  showConfirmButton: !loading,
  customClass: {
    confirmButton: 'swal-custom-ok-button' 
  },
  confirmButtonText: "Login Here",
  willClose: () => {
    if (!loading) {
      window.location.href = "https://lmclub.club/login";
    }
  }
});

  return (

    <div className="container">




      {/* {loading ? <p>Verifying your email...</p> : <p>{message}</p>} */}
      {/* <button onClick={() => navigate("/login")}>Go to Login</button> */}
    </div>
  );
};

export default VerifyEmail;
