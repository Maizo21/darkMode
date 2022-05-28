import "./App.css";
import Navbar from "./Navbar/Navbar";
import Mainbanner from "./Mainbanner/Mainbanner";
import Squares from "./Squares/Squares";
import Bannertext from "./Bannertext/Bannertext";
import Bannerimages from "./Bannerimages/Bannerimages";
import Bannericons from "./Bannericons/Bannericons";
import Footer from "./Footer/Footer";
import Switch from "./Switch/Switch";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Mainbanner
          image={`https://www.xtrafondos.com/wallpapers/casa-kame-de-dragon-ball-3963.jpg`}
          title={`Dark Mode for React`}
          text={`Take care of your eyes 😎`}
        />

        <Squares
          image1={`https://www.xtrafondos.com/wallpapers/yoh-asakura-amidamaur-shaman-king-7332.jpg`}
          image3={`https://www.xtrafondos.com/wallpapers/sukuna-de-jujutsu-kaisen-8302.jpg`}
          image2={`https://www.xtrafondos.com/wallpapers/spider-man-supreme-9600.jpg`}
          image4={`https://www.xtrafondos.com/wallpapers/doctor-strange-en-el-multiverso-de-locura-de-wandavision-9562.jpg`}
        />

        <Bannertext
          text={`Hello everybody! 😁 `}
          text2={`I'm a React developer 👨‍💻`}
          text3={`See ya!`}
          textColor={`#0b223a`}
          backgroundColorText={`#bddaec`}
        />

        <Mainbanner
          image={`https://www.xtrafondos.com/wallpapers/rayo-en-paisaje-9125.jpg`}
        />
        <Bannerimages
          image1={`https://www.xtrafondos.com/wallpapers/astronauta-en-el-cielo-8636.jpg`}
          image2={`https://www.xtrafondos.com/wallpapers/galaxia-y-constelacion-orion-3895.jpg`}
          image3={`https://www.xtrafondos.com/wallpapers/universo-abstracto-3820.jpg`}
          text={`Blink and a star is on its way to sleep, I'm standing so close to Jupiter, I can feel its winds sweep me off my feet, I'm an astronaut without a name.`}
        />

        <Bannericons
          logo1={`https://www.xtrafondos.com/wallpapers/planeta-en-la-galaxia-5492.jpg`}
          texto1={`Kepler`}
          logo2={`https://www.xtrafondos.com/wallpapers/existencia-de-planetas-paralelos-10027.jpg`}
          texto2={`Gliese`}
          logo3={`https://www.xtrafondos.com/wallpapers/planeta-como-la-tierra-9736.jpg`}
          texto3={`Ogle`}
        />

        <Footer />

        <Switch />
      </div>
    </>
  );
}

export default App;
