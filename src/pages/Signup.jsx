import { useState } from "react";
import { auth } from "../firebase/firebase";  // Ensure this path is correct
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";  // Import Link for navigation

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to manage error messages
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/about"); // Redirect to the dashboard on successful signup
    } catch (error) {
      setError(error.message); // Display error message if signup fails
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>

      {/* Display error message if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Link to login page */}
      <div>
        <p>Already have an account?</p>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
