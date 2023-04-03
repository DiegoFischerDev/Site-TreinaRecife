import React, { useContext, useState } from 'react';
import { globalContext } from "../contexts";
import { cadastrarProfessor, editarProfessor } from '../server/ServerFunctions'


function AdmListaDeProfessores() {

  const { professores, setModalExcluirProfessor, setProfessores } = useContext(globalContext);

  const [modoEditProfessor, SetModoEditProfessor] = useState("");
  const [newImagem, setNewImagem] = useState('');
  const [newNome, setNewNome] = useState('');
  const [newBiografia, setNewBiografia] = useState('');
  const [modalEditarImagem, setModalEditarImagem] = useState('hiden');
  const [modalCadastrarProfessor, setModalCadastrarProfessor] = useState('hiden');

  function AddBackGroundBlur() {
    document.querySelector('#PerfilDoUsuario').classList.add('blur');
  }

  return (
    <div>
      <h2 style={{ marginTop: 60, textAlign: "center", width: "100%" }}>Lista de Professores</h2>

      <div className='admListaDeProfessores'>

        {professores.map((professor) => {
          return (
            <div key={professor.id}>
              {modoEditProfessor != professor.id &&
                <div className='admListaDeProfessoresCard' >
                  <img src={professor.imagem} />
                  <div style={{ margin: 20 }}>
                    <h4>{professor.nome}</h4>
                    <p style={{ textAlign: "justify" }}>{professor.biografia}</p>
                    <button className='botaoNeutro' onClick={() => { setNewNome(professor.nome); setNewImagem(professor.imagem); setNewBiografia(professor.biografia); SetModoEditProfessor(professor.id); setModalCadastrarProfessor('hiden') }}>Editar</button>
                    <button className='botaoNeutro' onClick={() => { AddBackGroundBlur(); setModalExcluirProfessor({ id: professor.id, nome: professor.nome }) }}>Excluir</button>
                  </div>
                </div>
              }

              {modoEditProfessor == professor.id &&
                <div className='admListaDeProfessoresCard' >
                  <img src={professor.imagem} />
                  <button style={{ position: "absolute" }} onClick={() => { setModalEditarImagem(professor.id) }}>Editar Imagem</button>
                  <div style={{ margin: 20, width: '100%' }}>
                    <input style={{ width: 300 }} onChange={(e) => { setNewNome(e.target.value) }} value={newNome} placeholder={professor.nome} /><br />
                    <textarea style={{ width: '100%', height: 150 }} onChange={(e) => { setNewBiografia(e.target.value) }} value={newBiografia} placeholder={professor.biografia} />
                    <br />
                    <button className='botaoNeutro botaoGreen' onClick={() => {editarProfessor(setProfessores, professor.id, newImagem, newNome, newBiografia); SetModoEditProfessor('') }}>Salvar</button>
                    <button className='botaoNeutro' onClick={() => { SetModoEditProfessor('') }}>Cancelar</button>
                  </div>
                </div>
              }

              {modalEditarImagem != 'hiden' && modoEditProfessor == professor.id &&
                <div id="ModalExcluirCurso" className='shadown modalExcluirCurso' style={{ height: 300 }}>
                  <div><p>Editar Imagem de <strong>{professor.nome}</strong></p></div>
                  <textarea onChange={(e) => { setNewImagem(e.target.value) }} value={newImagem}></textarea>
                  <button className='botaoGreen' onClick={() => { setModalEditarImagem('hiden') }}>Salvar</button>
                  <button className='botaoNeutro' onClick={() => { setModalEditarImagem('hiden') }}>Cancelar</button>
                </div>
              }

            </div>

          )
        })}

        <div style={{ width: 400, display: "flex", justifyContent: "space-evenly", margin: "auto" }}>
          <button className='botaoNeutro' onClick={() => { setNewImagem('https://presidentekennedy.es.leg.br/images/perfil-neutro.jpg'); setNewNome(''); setNewBiografia(''); setModalCadastrarProfessor('show'); SetModoEditProfessor('hiden') }}>Cadastrar Novo Professor</button>
        </div>

        {modalCadastrarProfessor == 'show' &&
          <div className='admListaDeProfessoresCard' >
            <img src={newImagem} />
            <button style={{ position: "absolute" }} onClick={() => { setModalEditarImagem('show') }}>Editar Imagem</button>
            <div style={{ margin: 20, width: '100%' }}>
              <input style={{ width: 300 }} onChange={(e) => { setNewNome(e.target.value) }} value={newNome} placeholder={'Digite o Nome Do Professor'} /><br />
              <textarea style={{ width: '100%', height: 150 }} onChange={(e) => { setNewBiografia(e.target.value) }} value={newBiografia} placeholder={'Digite a Biografia do Professor'} />
              <br />
              <button className='botaoNeutro botaoGreen' onClick={() => { setModalCadastrarProfessor('hiden'); cadastrarProfessor(setProfessores, newNome, newImagem, newBiografia) }}>Cadastrar Professor</button>
              <button className='botaoNeutro' onClick={() => { setModalCadastrarProfessor('hiden') }}>Cancelar</button>
            </div>
          </div>
        }

        {modalEditarImagem == 'show' &&
              <div id="ModalExcluirCurso" className='shadown modalExcluirCurso' style={{ height: 300 }}>
              <div><p>Editar Imagem de <strong>{newNome}</strong></p></div>
              <textarea onChange={(e) => { setNewImagem(e.target.value) }} value={newImagem}></textarea>
              <button className='botaoGreen' onClick={() => { setModalEditarImagem('hiden') }}>Salvar</button>
              <button className='botaoNeutro' onClick={() => { setModalEditarImagem('hiden') }}>Cancelar</button>
            </div>}
      </div>
    </div>
  )
}

export default AdmListaDeProfessores;