import { useSelector, useDispatch } from 'react-redux';
import styles from './Modal.module.scss';
import closeImg from '/svg/close.svg';
import { resetData } from '../../../store/modal/modal-store';
const Modal = () => {
    const modalData = useSelector((state) => state.data.value)
    const dispatch = useDispatch();

    const close = (event) => {
        if (event.target.closest(".modal-body")) return;
        dispatch(resetData())
      };

    return(
        <div v-if="getModalData" className={styles['modal-backdrop']} onClick={close}>
            <div v-if="getModalData" className={styles.modal}>
              <header id="modalheader">
                <img src={closeImg} />
              </header>
              <section className="modal-body" id="modalDescription" onClick={close}>
                <div className="img">
                  <img
                    src={getModalData['image-preview']}
                    alt={getModalData.name}
                  />
                </div>
                <div className="info">
                  <h1>{ getModalData.name }</h1>
                  <h3 className="mb-5">{ getModalData.description }</h3>
                  <div className="prices">
                    <span v-if="getModalData['old-price']" class="old-price">{ getModalData["old-price"] }</span>
                    <div
                      className="mb-5 d-flex justify-content-start align-items-center"
                    >
                      <span className="actual-price">{ getModalData.price }</span>
                      <span v-if="getModalData.discount" className="discount">{
                        getModalData.discount
                      }</span>
                    </div>
                  </div>
                  <a className='anchor' href={getModalData.link} target="_blank"
                    ><button className="add-to-cart">Add To Cart</button></a>
                </div>
              </section>
            </div>
        </div>
    )
}

export default Modal;