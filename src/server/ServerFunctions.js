import React, { useContext, useEffect, useState } from 'react';
import { db, auth } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

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
      console.log("atualizei")

    })
    .catch((error) => {
      console.log(`deu erro: ${error}`)
    })

}

export { buscarCursos }