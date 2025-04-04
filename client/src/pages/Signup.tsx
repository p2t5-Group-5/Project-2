import { useState, FormEvent, ChangeEvent } from "react"; 
import Auth from '../utils/auth';
import { signup } from "../api/authAPI";
import { UserSignup } from "../interfaces/UserSignup";

const Signup = () => {
  const [signupData, setSignupData] = useState<UserSignup>({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await signup(signupData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to sign up', err);
    }
  };

  return (
    <div className='form-container'>
      <form className='form login-form' onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className="form-group">
          <label>Username</label>
          <input 
            className="form-input"
            type='text'
            name='username'
            value={signupData.username || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            className="form-input"
            type='email'
            name='email'
            value={signupData.email || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            className="form-input"
            type='password'
            name='password'
            value={signupData.password || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type='submit'>Sign up</button>
        </div>
      </form>
    </div>
  )
};

export default Signup;
