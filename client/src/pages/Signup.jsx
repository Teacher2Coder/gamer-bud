import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../styles/Signup.css';

function SignUpPage() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const [addUser, { error, data }] = useMutation(ADD_USER);


  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    const { username,email, password, confirmPassword } = formData;


    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const { data } = await addUser({
        variables: { username, email, password }
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err)
      setErrorMessage('Something went wrong...')
    }
    alert('Account created successfully');
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
          <label htmlFor="signup-email">Email</label>
          <input
            type="text"
            id="signup-email"
            name="email"
            value={formData.email}
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
        <Link to='/login'>
          <Button>
            Go to Login
          </Button>
        </Link>
      </p>
    </div>
  );
}

export default SignUpPage;