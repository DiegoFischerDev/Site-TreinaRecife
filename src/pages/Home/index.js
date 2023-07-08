import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../../contexts";

const Home = () => {

  const { userName } = useContext(globalContext);

  return (
    <div className="home-container">

      <div>
        <img className="logo-treina-recife" src="https://res.cloudinary.com/di9oiqvom/image/upload/v1679184166/treinaRecife_quadrada_sowznb.png" alt="Logo Treina Recife" />
      </div>


      <div>
        <div className="container px-4 py-5">
          <h2 style={{ textAlign: "center" }} className="pb-2 border-bottom">Cursos Presenciais Em Recife</h2>

          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

            <Link to="/curso" className="col" style={{ cursor: "pointer", textDecoration: "none" }}>
              <div className="home-card card h-100 rounded-4 shadow-lg" >
                <img src="https://res.cloudinary.com/di9oiqvom/image/upload/v1679857845/imagem1_y009rk.png" />
              </div>
            </Link>

            <Link to="/curso" className="col" style={{ cursor: "pointer", textDecoration: "none" }}>
              <div className="home-card card h-100 rounded-4 shadow-lg" >
                <img src="https://res.cloudinary.com/di9oiqvom/image/upload/v1679857844/imagem2_leibf1.png" />
              </div>
            </Link>

            <Link to="/curso" className="col" style={{ cursor: "pointer", textDecoration: "none" }}>
              <div className="home-card card h-100 rounded-4 shadow-lg" >
                <img src="https://res.cloudinary.com/di9oiqvom/image/upload/v1679857846/imagem3_mh3umb.png" />
              </div>
            </Link>

            <Link to="/curso" className="col" style={{ cursor: "pointer", textDecoration: "none" }}>
              <div className="home-card card h-100 rounded-4 shadow-lg" >
                <img src="https://d335luupugsy2.cloudfront.net/cms/files/266511/1672675817/$pxh30v9jsvj" />
              </div>
            </Link>

            <Link to="/curso" className="col" style={{ cursor: "pointer", textDecoration: "none" }}>
              <div className="home-card card h-100 rounded-4 shadow-lg" >
                <img src="https://d335luupugsy2.cloudfront.net/cms/files/266511/1673549673/$1fd0109wg7m" />
              </div>
            </Link>

            <Link to="/curso" className="col" style={{ cursor: "pointer", textDecoration: "none" }}>
              <div className="home-card card h-100 rounded-4 shadow-lg" >
                <img src="https://d335luupugsy2.cloudfront.net/cms/files/266511/1677870664/$ujok08bv53e" />
              </div>
            </Link>

          </div>
        </div>
      </div>

      <div className="container marketing py-5">
        <div className="row">
          <h2 style={{ textAlign: "center" }} className="pb-2 border-bottom">Depoimentos</h2>
          <div className="col-lg-4" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 50 }}>
            <img src="https://www.lavanguardia.com/files/article_gallery_microformat/uploads/2018/07/25/5fa43a4a54014.jpeg" style={{ width: 150, height: 150, borderRadius: "50%" }} />
            <h2 className="fw-normal">Karilene Barros</h2>
            <p>"Não tenho palavras para descever a oportunidade que me foi concedida para fazer parte desse curso e asim dar inicio a minha jornada em programação!"</p>
          </div>
          <div className="col-lg-4" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 50 }}>
            <img src="https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg" style={{ width: 150, height: 150, borderRadius: "50%" }} />
            <h2 className="fw-normal">Xenta Junior</h2>
            <p>"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."</p>
          </div>
          <div className="col-lg-4" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 50 }}>
            <img src="https://cdn.mindminers.com/blog/uploads/2021/05/Dani-Almeida_auto_x1.png" style={{ width: 150, height: 150, borderRadius: "50%" }} />
            <h2 className="fw-normal">Delis Araujo</h2>
            <p>"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;