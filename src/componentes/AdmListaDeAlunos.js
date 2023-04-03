
const Alunos = [
  {
    nome: "Mariana Silva",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "React Native",
    dataDoCurso: "13/04/2023"
  },
  {
    nome: "Marcos Miranda",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Logica de Programação",
    dataDoCurso: "08/04/2023"
  },
  {
    nome: "Paula Campos",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Logica de Programação",
    dataDoCurso: "08/04/2023"
  },
  {
    nome: "Carlos Eduardo",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Java Web com Spring Boot",
    dataDoCurso: "05/04/2023"
  },
  {
    nome: "Bruno Silva",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "React Native",
    dataDoCurso: "13/04/2023"
  },
  {
    nome: "Mariana Silva",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "React Native",
    dataDoCurso: "13/04/2023"
  },
  {
    nome: "Marcos Miranda",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Logica de Programação",
    dataDoCurso: "08/04/2023"
  },
  {
    nome: "Paula Campos",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Logica de Programação",
    dataDoCurso: "08/04/2023"
  },
  {
    nome: "Carlos Eduardo",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Java Web com Spring Boot",
    dataDoCurso: "05/04/2023"
  },
  {
    nome: "Bruno Silva",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "React Native",
    dataDoCurso: "13/04/2023"
  },
  {
    nome: "Mariana Silva",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "React Native",
    dataDoCurso: "13/04/2023"
  },
  {
    nome: "Marcos Miranda",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Logica de Programação",
    dataDoCurso: "08/04/2023"
  },
  {
    nome: "Paula Campos",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Logica de Programação",
    dataDoCurso: "08/04/2023"
  },
  {
    nome: "Carlos Eduardo",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Java Web com Spring Boot",
    dataDoCurso: "05/04/2023"
  },
  {
    nome: "Bruno Silva",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "React Native",
    dataDoCurso: "13/04/2023"
  },
  {
    nome: "Mariana Silva",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "React Native",
    dataDoCurso: "13/04/2023"
  },
  {
    nome: "Marcos Miranda",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Logica de Programação",
    dataDoCurso: "08/04/2023"
  },
  {
    nome: "Paula Campos",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Logica de Programação",
    dataDoCurso: "08/04/2023"
  },
  {
    nome: "Carlos Eduardo",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "Java Web com Spring Boot",
    dataDoCurso: "05/04/2023"
  },
  {
    nome: "Bruno Silva",
    cpf: "21532652145",
    telefone: "81 999725499",
    email: "mariana@gmail.com",
    curso: "React Native",
    dataDoCurso: "13/04/2023"
  }
]


function AdmListaDeAlunos() {
  return (
    <div>
      <h2 style={{ marginTop: 70, textAlign: "center" }}>Lista de Alunos</h2>

      <div className="listaDeAlunosContainer">
        <table>
          <tr>
            <th>Nome</th>
            <th>Curso <select>
              <option>Todos</option>
            </select></th>
            <th>Data do Curso <select>
              <option>Todas</option>
            </select></th>
          </tr>
          {Alunos.map((aluno, index) => {
            return (
              <tr key={index}>
                <td><input type="checkbox" />{aluno.nome}</td>
                <td>{aluno.curso}</td>
                <td>{aluno.dataDoCurso}</td>
              </tr>
            )
          })}
        </table>
      </div>

      <button className="botaoNeutro">Enviar Email Para Alunos Selecionados</button>

    </div>
  )
}

export default AdmListaDeAlunos;