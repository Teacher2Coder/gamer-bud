import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      navigate('/profile');
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
    <div className="loginsection">
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
    </div>
  );
}
export default LoginPage;