import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function LoginForm(){
    return(
      <Form action='/auth/login' method='post' className="loginForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
      </Form>
    )
}

function RegisterForm(){
  const [ formData, setFormData ] = useState({
    email:'', password: '', firstName:'', lastName: '', age:''
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);  // Asegúrate de que los datos sean los esperados

    try {
        const response = await fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            window.location.href = '/login';  // Redirige al login si el registro es exitoso
        } else {
            const errorData = await response.json();
            console.error('Error registro:', errorData.message); // Muestra el mensaje de error
        }
    } catch (error) {
        console.log('Error al conectar con el servidor', error);
    }
};

  return(
    <Form onSubmit={handleSubmit} className="loginForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" value={formData.email} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Entre Password" value={formData.password} onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText1">
        <Form.Label>Frist Name</Form.Label>
        <Form.Control type="text" name='firstName' placeholder="Enter First Name" value={formData.firstName} onChange={handleChange}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicText2">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lastName' placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" name='age' placeholder="Enter Age" min='0' max='99' value={formData.age} onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
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
      <div className='loginRegister'>
        {isLogin ? <LoginForm/> : <RegisterForm/>}
        <button style={{marginTop:'1rem'}} onClick = {toggleForm}>
          {isLogin ? 'No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </button>
      </div>
    )

}

export default LoginRegister;