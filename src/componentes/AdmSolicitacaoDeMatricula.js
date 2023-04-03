
const solicitacoesDeMatricula = [
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



function AdmSolicitacaoDeMatricula() {
  return (
    <div>
      <h2 style={{ marginTop: 70, textAlign: "center" }}>Solicitações de Matricula</h2>

      <div className="solicitacaoDeMatriculaContainer">
        {solicitacoesDeMatricula.map((solicitacao) => {
          return (
            <div className="solicitacaoDeMatriculaCard shadown">
              <h4><strong>{solicitacao.nome}</strong></h4>
              <span>Cpf: {solicitacao.cpf}</span>
              <span>Email: {solicitacao.email}</span>
              <span>Telefone: {solicitacao.telefone}</span>
              <br/>
              <strong>{solicitacao.curso}</strong>
              <span>Data de inicio: {solicitacao.dataDoCurso}</span>
              <span style={{color: 'red', fontSize: 15}}>Aguardando pagamento...</span>
              <br/>
              <button className="botaoNeutro botaoPequeno">Excluir a Solicitação</button>
              <button className="botaoGreen botaoPequeno">Confirmar Matrícula</button>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default AdmSolicitacaoDeMatricula;