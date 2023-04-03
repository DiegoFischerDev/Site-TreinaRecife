import { excluirProfessor } from '../server/ServerFunctions'
import { globalContext } from "../contexts";
import { useContext } from 'react';

function ModalExcluirProfessor() {

  const { setProfessores, modalExcluirProfessor, setModalExcluirProfessor } = useContext(globalContext);

  function RemoveBackGroundBlur() {
    document.querySelector('#PerfilDoUsuario').classList.remove('blur');
  }

  return (
    <div id="ModalExcluirCurso" className='shadown modalExcluirCurso' style={{ filter: "blur(0)" }}>
      <span>Tem Certeza que deseja excluir o Professor</span>
      <span><strong style={{ fontSize: 20 }}>{modalExcluirProfessor.nome}</strong>?</span>
      <div>
        <button className='botaoNeutro' style={{ paddingInline: 18 }} onClick={() => { excluirProfessor(modalExcluirProfessor.id, setProfessores); setModalExcluirProfessor('hiden'); RemoveBackGroundBlur() }} >Excluir</button>
        <button className='botaoNeutro' onClick={() => { setModalExcluirProfessor('hiden'); RemoveBackGroundBlur() }}>Cancelar</button>
      </div>
    </div>
  )
}

export default ModalExcluirProfessor;