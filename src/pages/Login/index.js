import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalContext } from '../../contexts';

const Login = () => {

  const { setActive, setUserName } = useContext(globalContext)

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigate();

  const handleName = event => { setName(event.target.value) };
  const handlePassword = event => { setPassword(event.target.value) };
  const handleLogin = event => { 
    navigation("/");
    setActive("home");
    setUserName(name);
  }

  return (
    <div className="text-center" style={{ padding: 90 }}>

      <div className="form-signin w-100 m-auto" style={{ maxWidth: 400 }}>
        <form onSubmit={handleLogin}>
          <img className="mb-4" src="https://res.cloudinary.com/di9oiqvom/image/upload/v1678321594/download_srp5sa.png" alt="Logo" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onKeyUp={handleName} />
            <label htmlFor="floatingInput">Nome de usuário</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onKeyUp={handlePassword} />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">Treina Recife &copy; Todos os direitos reservados</p>
        </form>
      </div>
    </div>
  )
}

export default Login;