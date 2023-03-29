import React, { useContext, useEffect, useState } from 'react';
import { db, auth } from '../server/firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'


const AddCurso = (props) => {

  const [titulo, setTitulo] = useState("");
  const [professor, setProfessor] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [publicoAlvo, setPublicoAlvo] = useState("");
  const [preRequisitos, setPreRequisitos] = useState("");
  const [ementa, setEmenta] = useState("");
  const [preco, setPreco] = useState("");
  const [desconto, setDesconto] = useState("");
  const [dias, setDias] = useState("");
  const [horario, setHorario] = useState("");
  const [totalDeSemanas, setTotalDeSemanas] = useState("");
  const [proximaTurma, setProximaTurma] = useState("");

  async function cadastrarCurso() {

    await addDoc(collection(db, "ListaDeCursos"), {
      imagem: imagem,
      titulo: titulo,
      professor: professor,
      preco: preco,
      desconto: desconto,
      dias: dias,
      horario: horario,
      totalDeSemanas: totalDeSemanas,
      proximaTurma: proximaTurma,
      descricao: descricao,
      publicoAlvo: publicoAlvo,
      preRequisitos: preRequisitos,
      ementa: ementa
    })
      .then(() => {
        alert("Cadastrado com sucesso!");
        setTitulo("")
      })
      .catch((error) => {
        console.log(`deu erro: ${error}`)
      })
  }


  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "auto", marginTop: 50, marginBottom: 150}}>
      <h3>Cadastrar Novo Curso</h3>
      <br/>

      <div style={{ width: "90vw" }}>
        <label>Imagem</label>
        <input className="add-curso-input" placeholder='Exp: https://res.cloudinary.com/di9oiqvom/image/upload/v1679184166/treinaRecife_quadrada_sowznb.png' value={imagem} onChange={(e)=>{setImagem(e.target.value)}} /><br/>
        <label>Titulo do Curso</label>
        <input className="add-curso-input" placeholder='Exp: Logica de Programação' value={titulo} onChange={(e)=>{setTitulo(e.target.value)}}/><br/>
        <label>Professor</label>
        <input className="add-curso-input" placeholder='Exp: Rogerio' value={professor} onChange={(e)=>{setProfessor(e.target.value)}} /><br/>
        <label>Preço</label>
        <input className="add-curso-input" placeholder='Exp: 499' value={preco} onChange={(e)=>{setPreco(e.target.value)}} /><br/>
        <label>Desconto</label>
        <input className="add-curso-input" placeholder='Exp: 50' value={desconto} onChange={(e)=>{setDesconto(e.target.value)}} /><br/>
        <label>Dias</label>
        <input className="add-curso-input" placeholder='Exp: Segundas e Quartas' value={dias} onChange={(e)=>{setDias(e.target.value)}} /><br/>
        <label>Horário</label>
        <input className="add-curso-input" placeholder='Exp: das 19hr às 22hr' value={horario} onChange={(e)=>{setHorario(e.target.value)}} /><br/>
        <label>Total de Semanas</label>
        <input className="add-curso-input" placeholder='Exp: 6' value={totalDeSemanas} onChange={(e)=>{setTotalDeSemanas(e.target.value)}} /><br/>
        <label>Data de Início Proxima Turma</label>
        <input className="add-curso-input" placeholder='Exp: 13/04/2023' value={proximaTurma} onChange={(e)=>{setProximaTurma(e.target.value)}} /><br/>
        <label>Descrição</label>
        <textarea className="add-curso-input" placeholder='Exp: Nesse curso você vai aprender todos os recursos necessários à utilização, na prática, do framework React JS, ou seja, entender o que é o React JS, como configurar seu ambiente de trabalho e todo ecossistema, porque usá-lo, onde usá-lo, como usá-lo e, ainda, como criar seus primeiros projetos frontend e até aplicações completas.' style={{ height: "25vh"}} value={descricao} onChange={(e)=>{setDescricao(e.target.value)}} /><br/>
        <label>Público Alvo</label>
        <textarea className="add-curso-input" placeholder='Exp: Profissionais e estudantes das diversas áreas do conhecimento que desejem aprender de forma prática a criar aplicações com React JS. Se você quer saber como implementar aplicações frontend utilizando o framework React JS, esse é o lugar para você! Especialize-se através de um método eficiente e com uma grade curricular alinhada com o mercado.' style={{ height: "25vh"}} value={publicoAlvo} onChange={(e)=>{setPublicoAlvo(e.target.value)}} /><br/>
        <label>Pre-requesitos</label>
        <textarea className="add-curso-input" placeholder='Exp: Conhecimento básico de HTML, CSS e Javascript, trazer seu próprio notebook e ter uma vontade enorme de aprender.' style={{ height: "10vh"}} value={preRequisitos} onChange={(e)=>{setPreRequisitos(e.target.value)}} /><br/>
        <label>Ementa</label>
        <textarea className="add-curso-input" placeholder='Exp: 1. JavaScript Básico 2. Introdução ao React JS: criação do projeto e componentes customizados. 3. Hooks: estados e ciclos de vida. 4. Navegação entre páginas com React Router Dom. 5. Integração com API Externas com Axios' style={{ height: "20vh"}} value={ementa} onChange={(e)=>{setEmenta(e.target.value)}} /><br/>
      </div>
      
      <br/><br/>
      <button onClick={cadastrarCurso}>Salvar</button>
      <br/><br/>
      <button onClick={()=>{props.setShowAddCurso(false)}}>Cancelar</button>
    </div>
  )
}

export default AddCurso;