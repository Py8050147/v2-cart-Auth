import { useContext, useEffect, useState, createContext } from 'react';
import { account } from '../appwriteConfig';  // Ensure the correct path to appwriteConfig
import { useNavigate } from 'react-router-dom';
import { ID } from 'appwrite';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password);
      let accountDetails = await account.get();
      setUser(accountDetails);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    await account.deleteSession('current');
    setUser(null);
    navigate('/login');  // Redirect to login page on logout
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.name);
      await account.createEmailPasswordSession(userInfo.email, userInfo.password);
      let accountDetails = await account.get();
      setUser(accountDetails);
      console.log(response);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    checkUserStatus,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
