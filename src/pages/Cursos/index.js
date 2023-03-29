import React, { useContext, useEffect, useState } from 'react';
import AddCurso from '../../componentes/AddCurso';
import { globalContext } from "../../contexts";


const Cursos = () => {

  const { cursos, userName } = useContext(globalContext);
  
  const [showAddCurso, setShowAddCurso] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "auto", marginTop: 50, marginBottom: 150 }}>
      <h1>Lista de Cursos</h1>

      {cursos?.map((curso) => {
        return (
          <div key={curso.id}>
            <span>{curso.titulo}</span>
            <br />
          </div>
        )
      })}

      {(userName == 'Admin') && <button onClick={()=>{setShowAddCurso(true)}}>Adicionar Novo Curso</button>}
      {showAddCurso && <AddCurso setShowAddCurso={setShowAddCurso} />}
      

    </div>
  )
}

export default Cursos;