import "./App.css";
import island_01 from "./assets/4.jpg";
import island_02 from "./assets/5.jpg";
import island_03 from "./assets/6.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import Footer from "./components/Footer";
import Loading from "./components/Loading";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: '100vh',
//     backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/4.jpg'})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
   
//   },
// }));

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];

  // const classes = useStyles();

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={island_01} />
      <Slider
        imageSrc={island_02}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={island_03}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />

<CssBaseline />
      <Header />
      {/* <Loading/> */}
      <PlaceToVisit />

      <Footer/>
    </div>
  );
}

export default App;