import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./searchResults.module.css";

export default function SearchResultsPage() {
  const URL = `${import.meta.env.VITE_API_URL}/filter`;

  const retrieveIsVegetarian = () => {
    const vegetarian = localStorage.getItem("vegetarian");
    if (vegetarian === null) return "vegetarian=default";
    return `vegetarian=${localStorage.getItem("vegetarian")}`;
  };

  const retrieveAllergies = () => {
    const arachids = localStorage.getItem("arachides");
    const seafood = localStorage.getItem("fruits-de-mer");
    const fish = localStorage.getItem("poisson");
    const lactose = localStorage.getItem("lactose");
    const allergies = [];

    const addAllergy = (value, str) => {
      if (value !== null && value === "true") allergies.push(`${str}`);
    };
    addAllergy(arachids, "arachides");
    addAllergy(seafood, "fruits-de-mer");
    addAllergy(fish, "poisson");
    addAllergy(lactose, "lactose");

    if (allergies.length > 0) {
      const allergiesString = allergies.join(",");
      return `allergy=${allergiesString}`;
    }
    return "allergy=none";
  };

  const retrieveLimit = () => {
    const tempLimit = localStorage.getItem("limit");
    if (tempLimit !== null && tempLimit !== "default")
      return `limit=${tempLimit}`;
    return "limit=default";
  };

  const [results, setResults] = useState([]);
  const [status, setStatus] = useState(200);

  useEffect(() => {
    const isVegetarian = retrieveIsVegetarian();
    const allergy = retrieveAllergies();
    const limit = retrieveLimit();

    const fetchURL = () => `${URL}?${isVegetarian}&${allergy}&${limit}`;

    fetch(fetchURL()).then((response) => setStatus(response.status));
    const fetchResults = async () => {
      const response = await fetch(fetchURL());
      const data = await response.json();

      setResults(data);
    };
    fetchResults();
  }, [URL]);

  return (
    <main>
      <NavLink className={style.buttonBackSearch} to="/search">
        Retour
      </NavLink>
      <p className={style.text}>
        Voici une selection de plat qui vous correspondent
      </p>
      <div className={style.all}>
        {status !== 404 && results.length > 0
          ? results.map((r) => (
              <div className={style.allResults} key={r.id}>
                <NavLink to={`/recipe/${r.id}?returnURL=search-results`}>
                  <figure className={style.oneResult}>
                    <img className={style.image} src={r.image} alt={r.name} />
                    <figcaption className={style.title}>{r.name}</figcaption>
                    <span className={style.buttonRecipe}>Recette</span>
                  </figure>
                </NavLink>
              </div>
            ))
          : status !== 404 && <p>Chargement...</p>}
        {status === 404 && <p>Pas de résultats...</p>}
      </div>
    </main>
  );
}
