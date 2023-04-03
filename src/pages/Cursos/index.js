import React, { useContext, useEffect, useState } from 'react';
import { globalContext } from "../../contexts";
import TrilhasContainer from '../../componentes/TrilhasContainer';

const Cursos = () => {

  const { cursosOrdenadosPorData } = useContext(globalContext);

  const hoje = new Date();

  return (
    <div style={{position: 'relative'}}>
      <div className='agendaDeCursosContainer'>
        <h2 style={{color: "white"}}>Agenda de Cursos Treina Recife</h2>

        <div className='cursoContainerYoda'>
          <q style={{fontSize: 20, color: "white", minWidth: 150}}>Difícil de ver. Sempre em movimento está o Futuro.</q>
          <img className='cursosImagemYoda' src="https://res.cloudinary.com/di9oiqvom/image/upload/v1680443339/Star-Wars-Master-Yoda-Transparent-Images-PNG_kkebcn.png" />
        </div>

        <div>
          {cursosOrdenadosPorData?.map((curso) => {
            if (curso.DataDaProximaTurma > hoje)
              return (
                <div className='agendaDeCursosCard' key={curso.id} >
                  <div className='agendaCursosImgTituloContainer'>
                    <img style={{ width: 100, height: 60, padding: 5 }} src={curso.imagem} />
                    <span style={{ marginInline: 10, fontSize: 18 }}><strong>{curso.titulo}</strong></span>
                  </div>
                  <span style={{ marginInline: 10, fontSize: 18 }}>Início: <strong>{curso.proximaTurma}</strong></span>
                  <span style={{ marginInline: 10, fontSize: 18 }}>{curso.dias} {curso.horario}</span>
                  <button className='botaoBlue'>Matricule-se Agora! &#128640;</button>
                </div>
              )
          })}
        </div>
      </div>
        <TrilhasContainer />
    </div>
  )
}

export default Cursos;