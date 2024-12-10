import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');


  function handleSignUpSubmit(event) {
    event.preventDefault();

    const { username, password, confirmPassword } = formData;


    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }


    const userCredentials = { username, password };
    localStorage.setItem('userCredentials', JSON.stringify(userCredentials));

    alert('Account created');
    navigate('/login');
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <div className="signup-section">
      <h2>Create Account</h2>

      <form onSubmit={handleSignUpSubmit}>
        <div className="form">
          <label htmlFor="signup-username">Username</label>
          <input
            type="text"
            id="signup-username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            id="signup-password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <p>
        Already have an account? 
        <button onClick={() => navigate('/login')}>Login</button>
      </p>
    </div>
  );
}

export default SignUpPage;