import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';


function LoginPage() {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
    
    try {
      const { data } = await login({
        variables: { ...formData }
      });

      Auth.login(data.login.token);
    } catch(err) {
      console.error(err);
      setErrorMessage('Login failed :(')
    }

    setFormData({
      username: '',
      password: ''
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
      <p>
        Don't have an account? 
        <Link to='/signup'>
          <Button>
            Go to signup
          </Button>
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;