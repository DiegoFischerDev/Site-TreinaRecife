import CardConsultoria from "../../componentes/CardConsultoria";

const Consultoria = () => {
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
      <h2 style={{marginTop: 50, textAlign: "center"}}>Consultoria Para Empresas</h2>

      <div className="shadown" style={{ border: '1px solid #E4E2E2', borderRadius: 10, marginTop: 50, padding: 20, maxWidth: 1000, marginBottom: 30}}>
      <p style={{textAlign: "justify"}}>A Treina Recife desenvolveu um Programa que combina recrutamento com capacitação. Nós selecionamos os candidatos a desenvolvedores e submetemos a testes. Os classificados participam de treinamento, custeado pela empresa parceira, com possibilidade de contratação dependendo da performance do aluno. O treinamento é baseado na tecnologia que a empresa parceira utiliza. Ao longo do processo, são analisados os hard e soft skills. 
      </p>
      </div>
      <div style={{flexDirection: "row", display: "flex", width: "100%", justifyContent: "center", marginTop: 30}}>
        <CardConsultoria style={{gap: 10}} titulo="Avançar" descricao="Treinamentos de novas tecnologias para colaboradores da área de tecnologia." imagem="https://www.codeideias.com/wp-content/uploads/2019/01/2.jpg" />

        <CardConsultoria titulo="Migrar" descricao="Treinamentos partindo do zero, para funcionários de outras áreas da empresa." imagem="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" />

        <CardConsultoria titulo="Captar" descricao="Captar talentos oriundos de seleção externa, e capacitar sob medida para a sua empresa." imagem="https://3299491.fs1.hubspotusercontent-na1.net/hub/3299491/hubfs/voce-odeia-os-processos-seletivos-comuns-estas-startups-tambem.jpg?width=340&name=voce-odeia-os-processos-seletivos-comuns-estas-startups-tambem.jpg" />
      </div>

    </div>
  )
}

export default Consultoria;