import Product from "../Product/Product";
import styles from "./ProductList.module.scss";

const ProductList = () => {


return (
    <>
      <section className={styles.grid}>
        {filteredProducts.map( (item,index) =>{
            return <Product key={index} item={item} />
        } )}
    { products && products?.length == 0 ? (<div style="padding-bottom: 500px"></div>) : null }
  </section>
  <div v-if="moreToShow || moreThan4" className="text-center mb-5">
    <button
      :disabled="!moreToShow"
      className="mt-5 show-more d-flex align-items-center justify-content-between"
      @click="showMore()"
    >
      {{ moreToShow ? "View more" : "No more products to see" }}
      <img
        className="rotate"
        :className="{ 'upside-down': !moreToShow }"
        :src="'/svg/right-arrow.svg'"
        alt=""
      />
    </button>
  </div>
    </>
)

}


export default ProductList;