import { useState } from "react";
import { loginUser } from "../api/authApi";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/dashboard');
    } catch (err) {
      alert(err?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className='auth-page'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type='submit'>Login</button>
      </form>
      <p style={{ marginTop: '12px' }}>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

export default Login;