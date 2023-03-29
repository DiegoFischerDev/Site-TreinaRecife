import React, { useContext, useState } from 'react';
import { globalContext } from "../../contexts";
import LoginForm from '../../componentes/LoginForm';

const PerfilDoUsuario = () => {

  const { userName, admLogado } = useContext(globalContext);

  return (
    <div>
      {(userName == 'Login') && <LoginForm />}
      {(userName != "Login") && <p style={{color:"red", textAlign: "center"}}>(sair)</p>}

    </div>
  )
}

export default PerfilDoUsuario;