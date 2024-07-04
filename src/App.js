import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';

import OurStory from './Components/OurStory/OurStory';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import HeaderPart from './Components/HeaderPart/HeaderPart';
import BottomPart from './Components/BottomPart/BottomPart';

function App() {
  return (
    <div className='app'>
      {/* <div> */}
      {/* <HeaderPart /> */}
      {/* </div> */}
      {/* <div> */}
      <Header />

      {/* </div> */}
      {/* <div className="dynamic-content"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourstory" element={<OurStory />} />

        </Routes>

        {/* <div className='footers'> */}
      {/* </div> */}
      <BottomPart />
      {/* <BottomPart /> */}
      <Footer />

      {/* </div> */}
    </div>

  );
}

export default App;
