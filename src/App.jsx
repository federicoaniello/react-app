import { createPortal } from 'react-dom';
import './App.scss';
import Modal from './components/UI/Modal/Modal';
import Header from "./components/UI/Header/Header";
import TextList from './components/TextList/TextList';
import Carousel from './components/Carousel/Carousel';
function App() {

  return (
    <>
    {createPortal(<Modal />,document.body)}
    <Header />
    <Carousel />
    <TextList />
    </>
  )
}

export default App
