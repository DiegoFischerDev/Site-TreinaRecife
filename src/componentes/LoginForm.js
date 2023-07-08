import React, { useContext, useState } from 'react';
import { logarUsuario, cadastrarUsuario } from '../server/ServerFunctions'
import { globalContext } from "../contexts";

const LoginForm = () => {

  const { setUserName, setAdmLogado, userName, admLogado } = useContext(globalContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className="text-center" style={{ padding: 10 }}>

      <div className="w-100 m-auto" style={{ maxWidth: 400 }}>
        <img className="mb-4" src="https://res.cloudinary.com/di9oiqvom/image/upload/v1678321594/download_srp5sa.png" alt="Logo" width="70" height="70" />
        <h1 className="h3 mb-3 fw-normal">Faça seu Login</h1>

        <p style={{color: "red", marginBottom: 0}}>admin@admin.com</p>
        <p style={{color: "red"}}>Password: 123456</p>

        <div className="form-floating">
          <input value={email} type="text" className="form-control" placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <br />
        <div className="form-floating">
          <input value={senha} onChange={(e) => { setSenha(e.target.value) }} type="password" className="form-control" placeholder="Password" />
          <label htmlFor="floatingPassword">Senha</label>
        </div>
        <br /><br />
        <button className="w-100 btn btn-lg btn-primary" onClick={() => { logarUsuario(email, senha, setUserName, setAdmLogado) }}>Login</button><br /><br />
        {/* <button className="w-100 btn btn-lg btn-primary" onClick={()=>{cadastrarUsuario(email, senha)}}>Cadastrar</button> */}
      </div>
    </div>
  )
}

export default LoginForm;