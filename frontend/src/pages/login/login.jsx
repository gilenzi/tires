import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useLocation, useNavigate} from 'react-router-dom';
import {login} from '../../api/authentication';
import {useDispatch} from 'react-redux';
import {setUser} from '../../state/user/user-slice';

export function Login() {
  const dispatch = useDispatch();
  const [serverResponse, setServerResponse] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  const authorizedMessage = location.state?.message || '';

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (formData) => {
    setServerResponse({});
    try {
      const loginResponse = await login(formData.username, formData.password);
      setServerResponse({type: 'success', message: 'Logged in succesfully.'});
      dispatch(setUser(loginResponse));
      navigate(from, {replace: true});
    } catch (error) {
      setServerResponse({type: 'error', message: error});
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {authorizedMessage && <h2>{authorizedMessage}</h2>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          {...register('username', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Enter a valid email',
            },
          })}
        />
        {errors.username && (
          <p style={{color: 'red'}}>{errors.username.message}</p>
        )}
        <br />
        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password must be at least 3 characters',
            },
          })}
        />
        <br />
        {errors.password && (
          <p style={{color: 'red'}}>{errors.password.message}</p>
        )}

        <button type="submit">Login</button>
      </form>
      {serverResponse.message && (
        <p style={{color: serverResponse.type === 'error' ? 'red' : 'green'}}>
          {serverResponse.message}
        </p>
      )}
    </div>
  );
}
