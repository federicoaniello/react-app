import { createPortal } from 'react-dom';
import './App.scss';
import Modal from './components/UI/Modal/Modal';
import Header from "./components/UI/Header/Header";
import TextList from './components/TextList/TextList';
import Carousel from './components/Carousel/Carousel';
import Catalogue from './components/Catalogue/Catalogue';
function App() {

  return (
    <>
    {createPortal(<Modal />,document.body)}
    <Header />
    <Carousel />
    <TextList />
    <Catalogue />
    </>
  )
}

export default App
