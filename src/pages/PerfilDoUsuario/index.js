import React, { useContext, useState } from 'react';
import LoginForm from '../../componentes/LoginForm';
import DetalhesDoCursoModoEdit from '../../componentes/DetalhesDoCursoModoEdit';
import { globalContext } from "../../contexts";
import ModalExcluirCurso from '../../componentes/ModalExcluirCurso';
import AdmListaDeCursos from '../../componentes/AdmListaDeCursos';
import AdmListaDeProfessores from '../../componentes/AdmListaDeProfessores';

const PerfilDoUsuario = () => {

  const { userName, modoEditCurso, modalExcluirCurso } = useContext(globalContext);

  return (
    <div>

      {modalExcluirCurso &&
        <ModalExcluirCurso />
      }

      <div id='PerfilDoUsuario' >

        {!modoEditCurso && userName == 'Login' && <LoginForm />}

        {!modoEditCurso && userName == 'Admin' &&
          <div className='admin'>

            <h1>Painel de Controle</h1>
            <img src='https://res.cloudinary.com/di9oiqvom/image/upload/v1679184166/treinaRecife_quadrada_sowznb.png' width={200} />

            <AdmListaDeCursos />

            <AdmListaDeProfessores />

            <h2 style={{ marginTop: 40 }}>Solicitações de Matricula</h2>
            <h2 style={{ marginTop: 40 }}>Lista de Alunos</h2>
            <h2 style={{ marginTop: 40 }}>Lista de Depoimentos</h2>

          </div>
        }

        {modoEditCurso &&
          <DetalhesDoCursoModoEdit />
        }

      </div>
    </div>
  )
}

export default PerfilDoUsuario;