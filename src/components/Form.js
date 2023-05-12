import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  const [email,setemail]=useState('')
  const [pass,setpass]=useState('')
  const [isLog,setlog]=useState(false)
  const emailhandler=(event)=>{
    setemail(event.target.value)
    
  }
  const passhandler=(event)=>{
    setpass(event.target.value)
   
  }
  const submithandler=async(event)=>{
   
    setemail('')
    setpass('')
    let url
    if(isLog){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=API_KEY'
    }else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=API_KEY'
    }
  try{
    const response=await fetch(url,{
      method:'POST',
      body:JSON.stringify({
        email:email,
        password:pass,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Authentication failed!");
    }
      const data = await response.json();
    if(isLog){

    }else{

    }
    
    
  }catch(error){
    alert(error.message);
  }
}

  return (
    <Form onSubmit={submithandler}>
      {!isLog?<h2>SignUp</h2>:<h2>Login</h2>}
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={emailhandler}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={passhandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant='secondary'>{!isLog ?'Already Have an Account':'Create an Account'}</Button>
    </Form>
  );
}

export default BasicExample;
