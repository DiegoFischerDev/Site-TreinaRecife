import React, { useContext, useState } from 'react';
import LoginForm from '../../componentes/LoginForm';
import DetalhesDoCursoModoEdit from '../../componentes/DetalhesDoCursoModoEdit';
import { globalContext } from "../../contexts";
import { cursoPadrao } from '../../mocks/cursos'
import ModalExcluirCurso from '../../componentes/ModalExcluirCurso';
import AdmListaDeCursos from '../../componentes/AdmListaDeCursos';

const PerfilDoUsuario = () => {

  const { userName, modoEditCurso, setModoEditCurso, setCursos } = useContext(globalContext);

  const [CadastrarOuEditar, setCadastrarOuEditar] = useState("Cadastrar");
  const [cursoInfo, setCursoInfo] = useState(cursoPadrao);
  const [modalExcluirCurso, setModalExcluirCurso] = useState(false);

  function AddBackGroundBlur(){
    document.querySelector('#PerfilDoUsuario').classList.add('blur');
  }
  
  function RemoveBackGroundBlur(){
    document.querySelector('#PerfilDoUsuario').classList.remove('blur');
  }

  return (
    <div>

        {modalExcluirCurso &&
          <ModalExcluirCurso titulo={cursoInfo.titulo} id={cursoInfo.id} setModalExcluirCurso={setModalExcluirCurso} setCursos={setCursos} RemoveBackGroundBlur={RemoveBackGroundBlur} />
        }

      <div id='PerfilDoUsuario' >

        {!modoEditCurso && userName == 'Login' && <LoginForm />}

        {!modoEditCurso && userName == 'Admin' &&
          <div className='admin'>

            <h1>Painel de Controle</h1>
            <img src='https://res.cloudinary.com/di9oiqvom/image/upload/v1679184166/treinaRecife_quadrada_sowznb.png' width={200}/>
            
            <AdmListaDeCursos setCadastrarOuEditar={setCadastrarOuEditar} setCursoInfo={setCursoInfo} setModalExcluirCurso={setModalExcluirCurso} AddBackGroundBlur={AddBackGroundBlur} />

            <h2 style={{ marginTop: 40 }}>Lista de Professores</h2>
            <h2 style={{ marginTop: 40 }}>Solicitações de Matricula</h2>
            <h2 style={{ marginTop: 40 }}>Lista de Alunos</h2>
            <h2 style={{ marginTop: 40 }}>Lista de Depoimentos</h2>

          </div>
        }

        {modoEditCurso &&
          <DetalhesDoCursoModoEdit CadastrarOuEditar={CadastrarOuEditar} cursoInfo={cursoInfo} setModoEditCurso={setModoEditCurso} setCursos={setCursos} />
        }

      </div>
    </div>
  )
}

export default PerfilDoUsuario;