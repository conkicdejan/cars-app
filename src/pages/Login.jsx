import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth/slice';
import { selectLoginError } from '../store/auth/selectors';

function Login() {
  const dispatch = useDispatch();

  const loginError = useSelector(selectLoginError);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function handleLogin(e) {
    e.preventDefault();
    dispatch(login(form));
  }
  console.log(loginError);

  return (
    <div className="container">
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input className="form-control mb-3" type="email" name="email" required value={form.email} onChange={({ target }) => setForm({ ...form, [target.name]: target.value })} />

        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input className="form-control mb-3" type="password" name="password" required value={form.password} onChange={({ target }) => setForm({ ...form, [target.name]: target.value })} />
        <p className="text-danger">{loginError}</p>
        <button className="btn btn-primary my-3">Login</button>
      </form>
    </div>
  );
}

export default Login;
