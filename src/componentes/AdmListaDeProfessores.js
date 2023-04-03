import React, { useContext, useState } from 'react';
import { globalContext } from "../contexts";


function AdmListaDeProfessores() {

  const { professores } = useContext(globalContext);


  return (
    <div>
      <h2 style={{ marginTop: 60, textAlign: "center", width: "100%" }}>Lista de Professores</h2>

      <div className='admListaDeProfessores'>
        {professores.map((professor) => {
          return (
            <div className='admListaDeProfessoresCard' key={professor.id}>
              <img src={professor.imagem} />
              <div style={{ margin: 20 }}>
                <h4>{professor.nome}</h4>
                <p style={{ textAlign: "justify" }}>{professor.biografia}</p>
                <button className='botaoNeutro' onClick={() => { }}>Editar</button>
                <button className='botaoNeutro' onClick={() => { }}>Excluir</button>
              </div>
            </div>
          )
        })}

        <div style={{ width: 400, display: "flex", justifyContent: "space-evenly", margin: "auto" }}>
          <button className='botaoNeutro' onClick={() => { }}>Cadastrar Novo Professor</button>
        </div>
      </div>
    </div>
  )
}

export default AdmListaDeProfessores;