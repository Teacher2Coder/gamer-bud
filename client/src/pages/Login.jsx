import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  function handleLoginSubmit(event) {
    event.preventDefault();
    const { username, password } = formData;

    const savedCredentials = JSON.parse(localStorage.getItem('userCredentials'));


    if (savedCredentials && savedCredentials.username === username && savedCredentials.password === password) {
      const user = { name: '', email: '', username, profilePicture: '' };
      localStorage.setItem('userProfile', JSON.stringify(user));
      localStorage.setItem('authToken', 'your-auth-token');
      setErrorMessage('');
      alert('Successful Login');
      navigate('/profile');
    } else {
      setErrorMessage('Login failed :(');
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <div className="loginsection">
      <h2>Login</h2>

      <form onSubmit={handleLoginSubmit}>
        <div className="form">
          <label htmlFor="login-username">Username</label>
          <input
            type="text"
            id="login-username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default LoginPage;