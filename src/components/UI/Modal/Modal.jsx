import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Modal.module.scss';
import closeImg from '/svg/close.svg';
import { resetData } from '../../../store/modal/slice';

const Modal = () => {
  const modalData = useSelector((state) => state.modalSlice.modalData );
  const dispatch = useDispatch();

  const close = useCallback((event) => {
    if (event.target.closest('.modal-body')) return;
    dispatch(resetData());
  }, [dispatch]);

  const renderContent = () => {
    if (!modalData) return null;

    const { name, description, 'image-preview': imagePreview, link, price, discount, 'old-price': oldPrice } = modalData;

    return (
      <div className={styles['modal-backdrop']} onClick={close}>
        <div className={styles.modal}>
          <header id="modalheader" className={styles.modalHeader}>
            <img src={closeImg} alt="Close" />
          </header>
          <section className="modal-body" id="modalDescription" onClick={close}>
            <div className="img">
              <img src={imagePreview} alt={name} />
            </div>
            <div className="info">
              <h1>{name}</h1>
              <h3 className="mb-5">{description}</h3>
              <div className="prices">
                {oldPrice && <span className={styles['old-price']}>{oldPrice}</span>}
                <div className="mb-5 d-flex justify-content-start align-items-center">
                  <span className="actual-price">{price}</span>
                  {discount && <span className="discount">{discount}</span>}
                </div>
              </div>
              <a className="anchor" href={link} target="_blank" rel="noopener noreferrer">
                <button className="add-to-cart">Add To Cart</button>
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default Modal;
