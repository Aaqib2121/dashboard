import { Navigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";  // Make sure the path to your firebase config is correct

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        {/* You can replace this with a spinner or any loading component */}
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
