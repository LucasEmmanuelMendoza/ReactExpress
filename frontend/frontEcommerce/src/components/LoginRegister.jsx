import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function LoginForm(){
    return(
        <div>
    <Form className="loginForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <br />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
        </div>
    )
}

function RegisterForm(){
    return(
        <div>
    <Form className="loginForm">

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Entre Password" />
        <Form.Text className="text-muted"> <br />
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Frist Name</Form.Label>
        <Form.Control type="email" placeholder="Enter First Name"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Last Name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="email" placeholder="Enter Age"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
        </div>
    )
}

function LoginRegister(){
    const location = useLocation();
    const navigate = useNavigate();

    const isLogin = location.pathname === '/login';

    const toggleForm = () =>{
      navigate(isLogin ? '/register' : '/login');
    }

    return(
      <div>
        {isLogin ? <LoginForm/> : <RegisterForm/>}
        <button onClick = {toggleForm}>
          {isLogin ? 'No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </button>
      </div>
    )

}

export default LoginRegister;