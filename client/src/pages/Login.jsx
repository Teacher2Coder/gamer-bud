import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { LOGIN } from '../utils/queries'
import { useMutation } from '@apollo/client';

function LoginPage() {
  const [loginUser] = useMutation(LOGIN)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

 async function handleLoginSubmit(event) {
    event.preventDefault();

    try {
      const { email, password } = formData
      const response = await loginUser({ variables: { email, password } })
      console.log(response)
      localStorage.setItem("id_token", response.data.login.token)
      navigate('/myprofile');
    } catch (err) {
      setErrorMessage(err)
    }
  }


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div className="signup-section">
      <h2>Login</h2>

      <form onSubmit={handleLoginSubmit}>
        <div className="form">
        <label htmlFor="login-email">Email</label>
          <input
            type="text"
            id="login-email"
            name="email"
            value={formData.email}
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
      <p style={{ marginTop: '50px' }}>
        Don't have an account? 
        <Link to='/signup'>
          <Button>
            Go to Signup
          </Button>
        </Link>
      </p>
    </div>
  );
}
export default LoginPage;