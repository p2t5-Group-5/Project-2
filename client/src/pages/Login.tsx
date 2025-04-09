import { useState, FormEvent, ChangeEvent } from "react"; 
import Auth from '../utils/auth';
import { login } from "../api/authAPI";
import { UserLogin } from "../interfaces/UserLogin";

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      if (!data) {
        throw new Error('Something went wrong with the login');
      }
      console.log('Login successful!');
      console.log(data);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  const handleCreateAccount = () => {
    window.location.assign('/signup');
  }

  return (
    <div className='form-container'>
      <form className='form login-form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label>Username</label>
          <input 
            className="form-input"
            type='text'
            name='username'
            value={loginData.username || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            className="form-input"
            type='password'
            name='password'
            value={loginData.password || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type='submit'>Login</button>
        </div>
        <div className="btn-create-account" onClick={handleCreateAccount}>
          <h5>Don't have an account? Create one now!</h5>
        </div>
      </form>
    </div>
  )
};

export default Login;
