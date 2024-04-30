import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./filter.module.css";

export default function Filter() {
  useEffect(() => {
    localStorage.setItem("arachides", false);
    localStorage.setItem("fruits-de-mer", false);
    localStorage.setItem("poisson", false);
    localStorage.setItem("lactose", false);
  }, []);

  const [isAllergicToArachids, setIsAllergicToArachids] = useState(false);
  const [isAllergicToSeafood, setIsAllergicToSeafood] = useState(false);
  const [isAllergicToFish, setIsAllergicToFish] = useState(false);
  const [isAllergicToLactose, setIsAllergicToLactose] = useState(false);

  const saveAllergy = (str, bool) => {
    localStorage.setItem(str, bool);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    localStorage.setItem("vegetarian", form[0].value);
    localStorage.setItem("limit", form[1].value);

    navigate("/search-results");
  };

  const handleClick = (bool, setBool, str) => {
    setBool(!bool);
    saveAllergy(str, !bool);
  };

  return (
    <>
      <div className={style.allergies}>
        <p>Avez-vous des allérgies ?</p>
        <div>
          <button
            className={
              isAllergicToArachids
                ? `${style.buttonAllergies} ${style.buttonPressed}`
                : style.buttonAllergies
            }
            type="button"
            onClick={() =>
              handleClick(
                isAllergicToArachids,
                setIsAllergicToArachids,
                "arachides"
              )
            }
          >
            Arachides
          </button>
          <button
            type="button"
            className={
              isAllergicToSeafood
                ? `${style.buttonAllergies} ${style.buttonPressed}`
                : style.buttonAllergies
            }
            onClick={() =>
              handleClick(
                isAllergicToSeafood,
                setIsAllergicToSeafood,
                "fruits-de-mer"
              )
            }
          >
            Crustacées
          </button>
          <button
            type="button"
            className={
              isAllergicToFish
                ? `${style.buttonAllergies} ${style.buttonPressed}`
                : style.buttonAllergies
            }
            onClick={() =>
              handleClick(isAllergicToFish, setIsAllergicToFish, "poisson")
            }
          >
            Poisson
          </button>
          <button
            type="button"
            className={
              isAllergicToLactose
                ? `${style.buttonAllergies} ${style.buttonPressed}`
                : style.buttonAllergies
            }
            onClick={() =>
              handleClick(
                isAllergicToLactose,
                setIsAllergicToLactose,
                "lactose"
              )
            }
          >
            Lactose
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={style.vegetarian}>
          <label>
            Êtes-vous végétarien ?
            <select name="vegetarian">
              <option value="default">Peu importe</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </label>
        </div>
        <div className={style.limit}>
          <label>
            Combien de résultats souhaiteriez vous obtenir ?
            <select name="limit">
              <option value="default">Sélectionnez un nombre</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
        </div>
        <button type="submit">Continuer</button>{" "}
      </form>
    </>
  );
}
