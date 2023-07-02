import { useCallback, useEffect, useMemo, useState } from "react";
import Product from "../Product/Product";
import styles from "./ProductList.module.scss";

const ProductList = ({ products, selectedColor }) => {
  const [truncateValue, setTruncateValue] = useState(4);
  const moreToShow = products?.length > truncateValue;

  const showMore = () => setTruncateValue((prevValue) => prevValue + 4);


  let filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedColor !== null && selectedColor !== "") {
      filtered = filtered.filter((el) => el.color.includes(selectedColor));
    }
    return filtered.slice(0, truncateValue);
  }, [products, truncateValue, selectedColor]);

  return (
    products && (<>
      <section className={styles.grid}>
        {filteredProducts.map((item, index) => (
          <Product key={index} item={item} />
        ))}
        {products?.length === 0 && <div style={{ paddingBottom: '500px' }}></div>}
      </section>
      {(moreToShow || filteredProducts.length > 4) && (
        <div className="text-center mb-5">
          <button
            disabled={!moreToShow}
            className={`mt-5 ${styles["show-more"]} d-flex align-items-center justify-content-between`}
            onClick={showMore}
          >
            {moreToShow ? "View more" : "No more products to see"}
            <img
              className={`${styles.rotate} ${!moreToShow ? styles.to180 : ""}`}
              src="/svg/right-arrow.svg"
              alt="Right arrow"
            />
          </button>
        </div>
      )}
    </>)
  );
};

export default ProductList;
