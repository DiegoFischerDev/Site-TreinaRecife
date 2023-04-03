import { FiChevronsUp } from "react-icons/fi";

function TrilhasContainer() {

  document.addEventListener("mousemove", function (e) {
    var rocket = document.querySelector('.rocket');
    rocket.style.left = e.offsetX + 'px';
    rocket.style.top = e.offsetY + 'px';
  })

  function stars() {
    const scene = document.querySelector('.rocketContainer')
    let count = 10
    let i = 0

    while (i < count) {
      let star = document.createElement('i')

      let x = Math.floor(Math.random() * window.innerWidth)
      let duration = Math.random() * 1
      let h = Math.random() * 100

      star.style.left = x + 'px'
      star.style.width = 0.5 + 'px'
      star.style.height = h + 'px'
      star.style.animationDuration = duration + 's'

      scene.appendChild(star)
      i++
    }
  }

  setTimeout(stars, 100);

  return (
    <div className="sectionTrilhas">
      <div>
        <div className="textContainer">
          <h2>Inicie Sua Jornada na</h2>
          <h2 style={{color: "yellow"}}>TREINA RECIFE</h2>
          
          <div className="trilhas">
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <img src="https://res.cloudinary.com/di9oiqvom/image/upload/v1680482398/kindpng_41409_gvs7xi.png" width={300} style={{marginBottom: -30}} />
              <h2 style={{color: "yellow"}}>Dev Front-End Junior</h2>
              <FiChevronsUp className="arrowIcon" size={50} color="yellow" /><br/>
              <h4>Curso React Experience</h4>
              <FiChevronsUp className="arrowIcon" size={50} color="yellow" /><br/>
              <h4>Curso React JS / React Native</h4>
              <FiChevronsUp className="arrowIcon" size={50} color="yellow" /><br/>
              <h4>Curso HTML, CSS, Javascript</h4>
              <FiChevronsUp className="arrowIcon" size={50} color="yellow" /><br/>
              <h4>Curso Logica de Programação</h4>
            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <img src="https://res.cloudinary.com/di9oiqvom/image/upload/v1680482397/NicePng_chandan-png_2666972_viwuey.png" width={120} style={{marginBottom: 20, paddingTop: 65}} />
              <h2 style={{color: "yellow"}}>Dev Back-End Junior</h2>
              <FiChevronsUp className="arrowIcon" size={50} color="yellow" /><br/>
              <h4>Curso Java Experience</h4>
              <FiChevronsUp className="arrowIcon" size={50} color="yellow" /><br/>
              <h4>Curso Java Web com Spring Boot</h4>
              <FiChevronsUp className="arrowIcon" size={50} color="yellow" /><br/>
              <h4>Curso C# Web</h4>
              <FiChevronsUp className="arrowIcon" size={50} color="yellow" /><br/>
              <h4>Curso Logica de Programação</h4>
            </div>

          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: 100}}>
              <h2 style={{color: "yellow"}}>Cursos Complementares</h2>
              <h4>Curso Power BI</h4>
              <h4>Curso Metodologias Ágeis</h4>
            </div>
        </div>
      </div>
      <div id="scene" className='rocketContainer'>


        <div className="rocket">
          <img src="https://res.cloudinary.com/di9oiqvom/image/upload/v1680447490/Pngtree_flying_rocket_3718748_v9vpya.png" width={100} />
        </div>

      </div>

    </div>
  )
}

export default TrilhasContainer;