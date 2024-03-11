import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CarouselComp from './CarouselComp/CarouselComp';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/:cardId'} element={<CarouselComp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
