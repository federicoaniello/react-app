import { createPortal } from 'react-dom';
import './App.scss';
import { Modal } from './components/UI/Modal/Modal';

function App() {

  return (
    <>
    {createPortal(Modal,document.body)}
    </>
  )
}

export default App
