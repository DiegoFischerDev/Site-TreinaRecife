import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {

  const content = [

    {
      image: "https://res.cloudinary.com/di9oiqvom/image/upload/v1679186040/imagem1_vg5omi.jpg",
      title: "Professores Qualificados",
      text: "Nosso time de professores possui larga experiência profissional no tema que se propõe a ensinar."
    }
    // {
    //   image: "https://res.cloudinary.com/di9oiqvom/image/upload/v1679185925/imagem2_bb5ruo.jpg",
    //   title: "Preços Competitivos",
    //   text: "Praticamos preços justos com possibilidade de parcelamento nos cartões: VISA, MASTER ou HIPER Card"
    // },
    // {
    //   image: "https://res.cloudinary.com/di9oiqvom/image/upload/v1679185925/imagem3_jnum1f.jpg",
    //   title: "Cursos Inovadores",
    //   text: "Nossos treinamentos são norteados por uma metodologia consolidada, fazendo com que os conceitos teóricos sejam desenvolvidos em atividades práticas no estilo “mão na massa”"
    // }
  ]


  return (
    <div style={{ display: "flex", alignItems: 'center', justifyContent: "center", width: "100%", height: 300, backgroundColor: "#212529" }}>
      <Carousel className='home-carousel'>

        {content.map((item) => {
          return (
            <Carousel.Item>
              <div style={{ display: "flex", flexDirection: "row", height: 300, padding: 50}}>
                <img
                  className="home-carousel-img"
                  src={item.image}
                  alt={item.titulo}
                />
                <h1>Tex==xxxxtxttoooo</h1>
              </div>

              <Carousel.Caption style={{ marginBottom: 250 }}>
                <h2>{item.titulo}</h2>
                <h4>{item.text}</h4>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}

      </Carousel>

    </div>
  );
}

export default Carrossel;