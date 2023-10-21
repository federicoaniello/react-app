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
    if (event?.target?.closest('.modal-body')) return;
    dispatch(resetData());
  };

  const renderContent = () => {
    if (!modalData) return null;

    const { name, description, 'image-preview': imagePreview, link, price, discount, 'old-price': oldPrice } = modalData;

    return (
      <div className={styles['modal-backdrop']} onClick={close}>
        <div className={styles.modal}>
          <header id="modalheader" className={styles.modalHeader}>
            <img src={closeImg} alt="Close" />
          </header>
          <section className={styles["modal-body"]} id="modalDescription" onClick={close}>
            <div className={styles.img}>
              <img src={imagePreview} alt={name} />
            </div>
            <div className={styles.info}>
              <h1>{name}</h1>
              <h3 className="mb-5">{description}</h3>
              <div className={styles.prices}>
                {oldPrice && <span className={styles['old-price']}>{oldPrice}</span>}
                <div className="mb-5 d-flex justify-content-start align-items-center">
                  <span className={styles["actual-price"]}>{price}</span>
                  {discount && <span className={styles.discount}>{discount}</span>}
                </div>
              </div>
              <a className={styles.anchor} href={link} target="_blank" rel="noopener noreferrer">
                <button className={styles["add-to-cart"]}>Add To Cart</button>
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
