import styles from "./Header.module.scss";
import logo from "/images/logo_archiproducts.png";

const Header = () => {

    return (
        <header className={`${styles.header} container justify-content-center justify-content-md-between`}>
        <img src={logo} alt="Header_logo" />
      </header>
    )
} 


export default Header;