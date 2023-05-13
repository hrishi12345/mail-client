import { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { login,signup } from '../store';

function AuthForm() {
  const [email,setemail] = useState('');
  const [password,setpass] = useState();
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const switchModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const emailHandler=(event)=>{
    setemail(event.target.value)
  }
  const passwordHandler=(event)=>{
    setpass(event.target.value)
  }
  const submitHandler = async (event) => {
    event.preventDefault();
  

    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCR1tfldY3tGoHgIHRJFEULd1C5XYv8kKQ`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?keyAIzaSyCR1tfldY3tGoHgIHRJFEULd1C5XYv8kKQ`;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Authentication failed!');
      }

      const data = await response.json();

      if (isLogin) {
        console.log(data.email)
        dispatch(login({ token: data.idToken,email:data.email}));
      } else {
        console.log(data.email)
        dispatch(signup({ token: data.idToken,email:data.email}));
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Form onSubmit={submitHandler}>
      <h2>{isLogin ? 'Login' : 'Sign up'}</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={emailHandler} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={passwordHandler} />
      </Form.Group>

      <Button variant="primary" type="submit">
        {isLogin ? 'Login' : 'Sign up'}
      </Button>

      <Button variant="secondary" onClick={switchModeHandler}>
        {isLogin ? 'Create an account' : 'Already have an account'}
      </Button>
    </Form>
  );
}

export default AuthForm;