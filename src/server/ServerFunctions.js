import React, { useContext, useEffect, useState } from 'react';
import { db, auth } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'


async function cadastrarUsuario(email, senha) {
  await createUserWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      alert("Cadastrado com sucesso!")
      console.log(`Usuario cadastrado com sucesso! email: ${value.user.email} uid: ${value.user.uid}`);
    })
    .catch((error) => {
      console.log(`deu erro: ${error}`)
      if (error.code === 'auth/weak-password')
        alert("Ops! Sua senha deve ter no minimo 6 digitos...")
      else if (error.code === 'auth/email-already-in-use')
        alert("Ops! Email ja cadastrado...")
      else if (error.code === 'auth/invalid-email')
        alert("Ops! Email invalido...")
      else if (error.code === 'auth/missing-emaill')
        alert("Ops! Você precisa digitar um email...")
      else alert("Ops! Erro ao tentar cadastrar... entre em contato conosco via Whatsapp")
    })
}

async function logarUsuario(email, senha, setUserName) {

  await signInWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      alert("Logado com sucesso!");
      console.log(value.user);

      if (value.user.email == 'admin@admin.com'){
        setUserName("Admin");
      } else {
        setUserName(value.user.email)
      }
      
      // setUserDetail({
      //   uid: value.user.uid,
      //   email: value.user.email
      // });
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password')
        alert("Ops! Senha errada...")
      else alert(`Ops! Deu Erro ao tentar logar... ${error}`)
      console.log(`deu erro: ${error}`)
    })
}

// async function fazerLogout() {
//   await signOut(auth);
//   setUserLogado(false);
//   setAdminLogado(false);
//   setUserDetail({});
// }

async function buscarCursos(setCursos) {

  const cursosRef = collection(db, "ListaDeCursos")

  await getDocs(cursosRef)
    .then((snapshot) => {
      let lista = [];

      snapshot.forEach(doc => {
        lista.push({
          id: doc.id,
          imagem: doc.data().imagem,
          titulo: doc.data().titulo,
          professor: doc.data().professor,
          preco: doc.data().preco,
          desconto: doc.data().desconto,
          dias: doc.data().dias,
          horario: doc.data().horario,
          totalDeSemanas: doc.data().totalDeSemanas,
          proximaTurma: doc.data().proximaTurma,
          descricao: doc.data().descricao,
          publicoAlvo: doc.data().publicoAlvo,
          preRequisitos: doc.data().preRequisitos,
          ementa: doc.data().ementa
        })
      });

      setCursos(lista);
      console.log("atualizei Cursos")

    })
    .catch((error) => {
      console.log(`deu erro: ${error}`)
    })

}

async function cadastrarCurso(setCursos, imagem, titulo, professor, preco, desconto, dias, horario, totalDeSemanas, proximaTurma, descricao, publicoAlvo, preRequisitos, ementa) {

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
      alert("Curso cadastrado com sucesso!");
      buscarCursos(setCursos);
    })
    .catch((error) => {
      console.log(`deu erro: ${error}`)
    })
}

async function editarCurso(setCursos, idDoCurso, newImagem, newTitulo, newProfessor, newPreco, newDesconto, newDias, newHorario, newTotalDeSemanas, newProximaTurma, newDescricao, newPublicoAlvo, newPreRequisitos, newEmenta) {
  const docRef = doc(db, "ListaDeCursos", idDoCurso)

  await updateDoc(docRef, {
    imagem: newImagem,
    titulo: newTitulo,
    professor: newProfessor,
    preco: newPreco,
    desconto: newDesconto,
    dias: newDias,
    horario: newHorario,
    totalDeSemanas: newTotalDeSemanas,
    proximaTurma: newProximaTurma,
    descricao: newDescricao,
    publicoAlvo: newPublicoAlvo,
    preRequisitos: newPreRequisitos,
    ementa: newEmenta
  })
    .then(() => {
      alert("Curso Atualizado!");
      buscarCursos(setCursos);
    })
    .catch((error) => {
      console.log(`deu erro: ${error}`)
    })
}

async function excluirCurso(id, setCursos) {
  const docRef = doc(db, "ListaDeCursos", id)

  await deleteDoc(docRef)
    .then(() => {
      buscarCursos(setCursos);
      alert("Curso Excluido Com Sucesso")
    })
    .catch((error) => {
      alert(`Erro ao tentar excluir: ${error}`)
    })
}

async function cadastrarProfessor(setProfessores, nome, imagem, biografia) {

  await addDoc(collection(db, "Professores"), {
    imagem: imagem,
    nome: nome,
    biografia: biografia,
  })
    .then(() => {
      alert("Professor cadastrado com sucesso!");
      buscarProfessores(setProfessores);
    })
    .catch((error) => {
      console.log(`deu erro: ${error}`)
    })
}

async function buscarProfessores(setProfessores) {

  const professoresRef = collection(db, "Professores")

  await getDocs(professoresRef)
    .then((snapshot) => {
      let lista = [];

      snapshot.forEach(doc => {
        lista.push({
          id: doc.id,
          imagem: doc.data().imagem,
          nome: doc.data().nome,
          biografia: doc.data().biografia
        })
      });

      setProfessores(lista);
      console.log("atualizei professores")

    })
    .catch((error) => {
      console.log(`deu erro: ${error}`)
    })
}

async function excluirProfessor(id, setProfessores) {
  const docRef = doc(db, "Professores", id)

  await deleteDoc(docRef)
    .then(() => {
      buscarProfessores(setProfessores);
      alert("Professor Excluido Com Sucesso")
    })
    .catch((error) => {
      alert(`Erro ao tentar excluir: ${error}`)
    })
}

async function editarProfessor(setProfessores, idDoProfessor, newImagem, newNome, newBiografia) {
  const docRef = doc(db, "Professores", idDoProfessor)

  await updateDoc(docRef, {
    imagem: newImagem,
    nome: newNome,
    biografia: newBiografia
  })
    .then(() => {
      alert(`Professor ${newNome} Atualizado!`);
      buscarProfessores(setProfessores);
    })
    .catch((error) => {
      console.log(`deu erro: ${error}`)
    })
}

export { buscarCursos, cadastrarCurso, logarUsuario, cadastrarUsuario, editarCurso, excluirCurso, cadastrarProfessor, buscarProfessores, excluirProfessor, editarProfessor }