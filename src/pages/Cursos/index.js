import React, { useContext, useEffect, useState } from 'react';
import { globalContext } from "../../contexts";

const Cursos = () => {

  const { cursosOrdenados } = useContext(globalContext);

  const hoje = new Date();

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "auto", marginBottom: 150 }}>
        <h2>Agenda de Cursos Treina Recife</h2>

        <div>
          {cursosOrdenados?.map((curso) => {
            if (curso.DataDaProximaTurma > hoje)
            return (
              <div className='agendaDeCursosCard' key={curso.id} >
                <div className='agendaCursosImgTituloContainer'>
                  <img style={{ width: 100, height: 60, padding: 5 }} src={curso.imagem} />
                  <span style={{ marginInline: 10, fontSize: 18 }}><strong>{curso.titulo}</strong></span>
                </div>
                  <span style={{ marginInline: 10, fontSize: 18 }}>Início: <strong>{curso.proximaTurma}</strong></span>
                  <span style={{ marginInline: 10, fontSize: 18 }}>{curso.dias} {curso.horario}</span>
                <button className='botaoGreen'>Matricule-se Agora! &#128640;</button> 
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cursos;