import styles from "./header.module.scss";

const Header = ({
  cartStateToggle,
  searchValue,
  setSearchValue,
  searchFucntion,
  cartArr,
}) => {
  let totalPrice = cartArr.reduce((sum, obj) => obj.price + sum, 0);
  return (
    <header className={styles.header}>
      <div className={styles.logoFlex}>
        <img src="img/icons/marketplace_logo.png" alt="Logo" />
        <strong className={styles.logoText}>MARKOM</strong>
      </div>

      <div className={styles.rightFlex}>
        <div className={styles.searchMain}>
          <img
            className={styles.searchActive}
            height={32}
            width={32}
            // src="img/icons/search.svg"
            src={
              searchValue === ""
                ? "img/icons/search.svg"
                : "img/icons/remove.svg"
            }
            alt=""
          />
          <input
            value={searchValue}
            onChange={searchFucntion}
            className={styles.searchInput}
            placeholder="Поиск..."
          />
        </div>
        <a href="#">
          <img height={32} width={32} src="img/icons/favorited.svg" alt="" />
        </a>
        <button className={styles.cartBox} onClick={cartStateToggle}>
          <img height={36} width={36} src="img/icons/cart.svg" alt="" />
          <strong>{totalPrice} &#x20bd;</strong>
        </button>
      </div>
    </header>
  );
};
export default Header;
