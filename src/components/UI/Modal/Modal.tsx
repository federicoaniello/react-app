import { useSelector, useDispatch } from 'react-redux';
import styles from './Modal.module.scss';
import closeImg from '/svg/close.svg';
import { resetData } from '../../../store/modal/slice';
import { RootState } from '../../../store/store';
import { MouseEvent } from 'react';

const Modal = () => {
  const modalData = useSelector((state: RootState) => state.modal.modalData );
  const dispatch = useDispatch();

  const close = (event:MouseEvent<HTMLDivElement>) => {
    dispatch(resetData());
  };

  return (<>
  {modalData && <>
    <div className={styles['modal-backdrop']} onClick={close}></div>
  <div className={styles.modal}>
    <header id="modalheader" className={styles.modalHeader} onClick={close}>
      <img src={closeImg} alt="Close" />
    </header>
    <section className={styles["modal-body"]} id="modalDescription">
      <div className={styles.img}>
        <img src={modalData['image-preview']} alt={modalData.name} />
      </div>
      <div className={styles.info}>
        <h1>{modalData.name}</h1>
        <h3 className="mb-5">{modalData.description}</h3>
        <div className={styles.prices}>
          {modalData['old-price'] && <span className={styles['old-price']}>{modalData['old-price']}</span>}
          <div className="mb-5 d-flex justify-content-start align-items-center">
            <span className={styles["actual-price"]}>{modalData.price}</span>
            {modalData.discount && <span className={styles.discount}>{modalData.discount}</span>}
          </div>
        </div>
        <a className={styles.anchor} href={modalData.link} target="_blank" rel="noopener noreferrer">
          <button className={styles["add-to-cart"]}>Add To Cart</button>
        </a>
      </div>
    </section>
  </div></>

  }
  </>);
};

export default Modal;
