import "./App.css";
import Navbar from "./Navbar/Navbar";
import Mainbanner from "./Mainbanner/Mainbanner";
import Squares from "./Squares/Squares";
import Bannertext from "./Bannertext/Bannertext";
import Bannerimages from "./Bannerimages/Bannerimages";
import Bannericons from "./Bannericons/Bannericons";
import Footer from "./Footer/Footer";
import Switch from "./Switch/Switch";
import dbz from "./images/dbz.jpg";
import shaman from "./images/shaman.jpg";
import sukuna from "./images/sukuna.jpg";
import spider from "./images/spider.jpg";
import strange from "./images/strange.jpg";
import rayo from "./images/rayo.jpg";
import astronaut from "./images/astronaut.jpg";
import orion from "./images/orion.jpg";
import universo from "./images/universo.jpg";
import luna from "./images/luna.jpg";
import jupiter from "./images/jupiter.jpg";
import planeta1 from "./images/planeta1.jpg";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Mainbanner
          image={dbz}
          title={`Dark Mode for React`}
          text={`Take care of your eyes 😎`}
        />

        <Squares
          image1={shaman}
          image3={sukuna}
          image2={spider}
          image4={strange}
        />

        <Bannertext
          text={`Hello everybody! 😁 `}
          text2={`I'm a React developer 👨‍💻`}
          text3={`See ya!`}
          textColor={`#0b223a`}
          backgroundColorText={`#bddaec`}
        />

        <Mainbanner image={rayo} />
        <Bannerimages
          image1={astronaut}
          image2={orion}
          image3={universo}
          text={`Blink and a star is on its way to sleep, I'm standing so close to Jupiter, I can feel its winds sweep me off my feet, I'm an astronaut without a name.`}
        />

        <Bannericons
          logo1={luna}
          texto1={`Moon`}
          logo2={jupiter}
          texto2={`Jupiter`}
          logo3={planeta1}
          texto3={`Ogle`}
        />

        <Footer />

        <Switch />
      </div>
    </>
  );
}

export default App;
