//import logo from './logo.svg';
//import './App.css';
import "./styles/style.scss";
import Curso from "./GYM";
import Banner from "./Banner";
import TopBar from "./TopBar";

const cursos = [
  {
    "title": "GYM in Vegas Nevada",
    "image": "https://i.pinimg.com/originals/4c/b6/24/4cb6245c9f2a3bf41615bf6a21a25b72.jpg",
    "price": "150 USA",
    "location": "Location in Vegas Nevada",
    "link":"More information",
    "URL:":"uamex.mx"
  },
  {
    "title": "",
    "image": "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/04/hipertextual-mas-facil-durante-cuarentena-google-maps-muestra-que-restaurantes-envian-domicilio-2020815281.jpg?fit=1200%2C800&ssl=1",
    "price": "see promotions",
    "location": "",
    "link":"view Location",
    "URL:":"uamex.mx"
  },
  {
    "title": "",
    "image": "https://img.haikudeck.com/mg/231BFB45-0E8B-4AE1-883F-3FDD17D751F5.jpg",
    "price": "see complete information",
    "location": "",
    "link":"Current promotions",
    "URL:":"uamex.mx"
  },
  {
    "title": "GYM in CDMX,Mexico",
    "image": "https://fondosmil.com/fondo/4059.jpg",
    "price": "100 USA",
    "location": "Location in Location in Vegas Nevada",
    "link":"More information",
    "URL:":"uamex.mx"
  },
  {
    "title": "",
    "image": "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/04/hipertextual-mas-facil-durante-cuarentena-google-maps-muestra-que-restaurantes-envian-domicilio-2020815281.jpg?fit=1200%2C800&ssl=1",
    "price": "see promotions",
    "location": "",
    "link":"view Location",
    "URL:":"uamex.mx"
  },
  {
    "title": "",
    "image": "https://img.haikudeck.com/mg/87A70BA0-08EE-4C53-B95E-05AF1522D383.jpg",
    "price": "see complete information",
    "location": "",
    "link":"Current promotions",
    "URL:":"uamex.mx"
  },
  {
    "title": "GYM in Madrid,Spain",
    "image": "https://wallpaperaccess.com/full/804836.jpg",
    "price": "10 EUROS",
    "location": "Location in Madrid, Spain ",
    "link":"More information",
    "URL:":"uaemex.mx"
  },
  {
    "title": "",
    "image": "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/04/hipertextual-mas-facil-durante-cuarentena-google-maps-muestra-que-restaurantes-envian-domicilio-2020815281.jpg?fit=1200%2C800&ssl=1",
    "price": "see promotions",
    "location": "",
    "link":"view Location",
    "URL:":"uamex.mx"
  },
  {
    "title": "",
    "image": "data:image/jpeg;base64,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",
    "price": "see complete information",
    "location": "",
    "link":"Current promotions",
    "URL:":"uamex.mx"
  }
]
const App = () =>
  <>
  
   
    <Banner />
    <br />
    <div className="ed-grid m-grid-3">
      {
        cursos.map(c => <Curso title={c.title} image={c.image} price={c.price} location={c.location} link={c.link} URL={c.URL}/>)
      }
    </div>
    <br />
    <TopBar />

  </>

export default App;
