import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//ToDO: The user data needs to be retrieved by making an API
//call to the backend
function Loginpage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [signUpData, setSignUpData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const [validCredentials, setValidCredentials] = useState({
    username: 'username', //use API
    password: 'password' //Use API
  });

  function handleLoginSubmit(event) {
    event.preventDefault();
    const { username, password } = formData;

    if (username === validCredentials.username && password === validCredentials.password) {
      const user = { name: 'Test_User', email: 'Test_email', username,
        profilePicture: '#'
       };
      localStorage.setItem('userProfile', JSON.stringify(user));
      localStorage.setItem('authToken', 'your-auth-token');
      localStorage.removeItem('userStatus');
      setErrorMessage('');
      alert('Successful Login');
      navigate('/profile');
    } else {
      setErrorMessage('Login failed :(');
    }
  }
  function handleSignUpSubmit(event) {
    event.preventDefault();
    const { username, password, confirmPassword } = signUpData;
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    alert('Account created');
    setIsSignUp(false);
  }
  function handleLoginInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
  function handleSignUpInputChange(event) {
    const { name, value } = event.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
  return (
    <div className="loginsection">
      <h2>{isSignUp ? 'Create Account' : 'Login'}</h2>

      {isSignUp ? (
        <form onSubmit={handleSignUpSubmit}>
          <div className="form">
            <label htmlFor="signup-username">Username</label>
            <input
              type="text"
              id="signup-username"
              name="username"
              value={signUpData.username}
              onChange={handleSignUpInputChange}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              name="password"
              value={signUpData.password}
              onChange={handleSignUpInputChange}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={signUpData.confirmPassword}
              onChange={handleSignUpInputChange}
              required
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <div className="form">
            <label htmlFor="login-username">Username</label>
            <input
              type="text"
              id="login-username"
              name="username"
              value={formData.username}
              onChange={handleLoginInputChange}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              name="password"
              value={formData.password}
              onChange={handleLoginInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Login' : 'Create Account'}
        </button>
      </p>
    </div>
  );
}

export default Loginpage;
