import { useEffect, useMemo, useState } from "react";
import Product from "../Product/Product";
import styles from "./ProductList.module.scss";
import { IProduct } from "../../model/IProduct";


interface ProductListProps {
  products: IProduct[];
  selectedColor: string;
}


const ProductList = ({ products, selectedColor }: ProductListProps): JSX.Element => {
  const [truncateValue, setTruncateValue] = useState(4);

  const showMore = () => setTruncateValue(prevValue => prevValue + 4);
  
  const filteredProducts = useMemo(() => {
    if (selectedColor === "") {
      return products;
    }
    return products.filter((product) => product.color?.includes(selectedColor));
  }, [products, selectedColor]);

  const moreToShow = filteredProducts?.length >= truncateValue;
  const hasReachedEnd = truncateValue >= filteredProducts?.length;
  useEffect(() => {
    setTruncateValue(4);
  }, [selectedColor,products]);

  return (
    products && (
      <>
        <section className={styles.grid}>
          {filteredProducts.length > 0 && filteredProducts.slice(0, truncateValue).map((item, index) => (
            <Product key={index} item={item} />
          ))}
          {filteredProducts.length === 0 && <div style={{ paddingBottom: "500px" }}></div>}
        </section>
        {moreToShow && (
        <div className="text-center mb-5">
          <button
            disabled={hasReachedEnd}
            className={`mt-5 ${styles["show-more"]} d-flex align-items-center justify-content-between`}
            onClick={showMore}
          >
            {!hasReachedEnd ? "View more" : "No more products"}
            <img
              className={`${styles.rotate} ${hasReachedEnd ? styles.to180 : ""}`}
              src="/svg/right-arrow.svg"
              alt="Right arrow"
            />
          </button>
        </div>
      )}
      </>
    )
  );
};

export default ProductList;
