import { useDispatch } from "react-redux";
import styles from "./Product.module.scss";
import { setData } from "../../store/modal/slice";
import PropTypes from "prop-types";

Product.propTypes = {
    item: PropTypes.object
  };
const Product = ({item}) => {

    const dispatch = useDispatch();

    return (
         <div className={styles.product} onClick={dispatch(setData(item))}>
    <div className={styles['product--img']}>
      <div
        className={`${styles['additional-info']} ${!item?.discount ? 'justify-content-end' : ''}`}
      >
        { item?.discount && (<span>{ item?.discount }</span>)}
        <img src="/svg/heart.svg" alt="" />
      </div>
      <img src="item?.['image-thumb']" alt="" />
      <svg
        className="eye"
        fill="white"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 129 129"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        enableBackground="new 0 0 129 129"
      >
        <g>
          <g>
            <path
              d="m64.7,36.3c-28.4,0-55.9,27.1-57,28.3-0.8,0.8-1.2,1.8-1.2,2.9s0.4,2.1 1.2,2.9c1.2,1.2 28.6,28.3 57,28.3s55.9-27.1 57-28.3c0.8-0.8 1.2-1.8 1.2-2.9s-0.4-2.1-1.2-2.9c-1.1-1.2-28.5-28.3-57-28.3zm0,54.1c-19.9,0-40.4-16.2-48.1-23 7.7-6.8 28.2-23 48.1-23s40.4,16.2 48.1,23c-7.7,6.8-28.2,23-48.1,23z"
            />
            <path
              d="m50,67.4c0,8.1 6.6,14.8 14.8,14.8s14.8-6.6 14.8-14.8-6.6-14.8-14.8-14.8-14.8,6.7-14.8,14.8zm21.3,0c0,3.6-2.9,6.6-6.6,6.6-3.6,0-6.6-2.9-6.6-6.6s2.9-6.6 6.6-6.6c3.6,0.1 6.6,3 6.6,6.6z"
            />
          </g>
        </g>
      </svg>
    </div>
    <div className={styles['product--info']}>
      <h5>{ item?.name }</h5>
      <h6>{ item?.description }</h6>
      <div className={styles.prices}>
        {item?.["old-price"] && <span className={styles['old-price']}>{ item?.["old-price"] }</span>}
        <span style="font-weight: bold">{ item?.price }</span>
      </div>
    </div>
  </div>
    )
}


export default Product;