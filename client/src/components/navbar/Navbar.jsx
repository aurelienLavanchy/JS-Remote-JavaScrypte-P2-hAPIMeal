import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import logoList from "../../assets/logos/list.png";
import logo from "../../assets/logos/logo.png";
import logoMeal from "../../assets/logos/meal.png";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link to="/">
        <img className={style.logo} src={logo} alt="logo" />
      </Link>
      <h1 className={style.title}> HomelyFood </h1>
      <ul>
        <li>
          <Link to="/search">
            <figure>
              <img className={style.logolist} src={logoList} alt="list" />
              <figcaption>Filtres</figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="/recipe-list">
            <figure>
              <img className={style.logomeal} src={logoMeal} alt="meals" />
              <figcaption>Recettes</figcaption>
            </figure>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
