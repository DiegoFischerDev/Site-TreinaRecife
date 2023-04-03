import React, { useContext, useState } from 'react';
import LoginForm from '../../componentes/LoginForm';
import DetalhesDoCursoModoEdit from '../../componentes/DetalhesDoCursoModoEdit';
import { globalContext } from "../../contexts";
import ModalExcluirCurso from '../../componentes/ModalExcluirCurso';
import AdmListaDeCursos from '../../componentes/AdmListaDeCursos';
import AdmListaDeProfessores from '../../componentes/AdmListaDeProfessores';
import ModalExcluirProfessor from '../../componentes/ModalExcluirProfessor';
import AdmSolicitacaoDeMatricula from '../../componentes/AdmSolicitacaoDeMatricula';
import AdmListaDeAlunos from '../../componentes/AdmListaDeAlunos';

const PerfilDoUsuario = () => {

  const { userName, modoEditCurso, modalExcluirCurso, modalExcluirProfessor } = useContext(globalContext);

  return (
    <div>

      {modalExcluirCurso &&
        <ModalExcluirCurso />
      }

      {modalExcluirProfessor != 'hiden' &&
        <ModalExcluirProfessor />
      }

      <div id='PerfilDoUsuario' >

        {!modoEditCurso && userName == 'Login' &&
          <LoginForm />
        }

        {!modoEditCurso && userName == 'Admin' &&
          <div className='admin'>

            <h1>Painel de Controle</h1>
            <img src='https://res.cloudinary.com/di9oiqvom/image/upload/v1679184166/treinaRecife_quadrada_sowznb.png' width={200} />

            <AdmListaDeCursos />

            <AdmListaDeProfessores />

            <AdmSolicitacaoDeMatricula />

            <AdmListaDeAlunos />

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