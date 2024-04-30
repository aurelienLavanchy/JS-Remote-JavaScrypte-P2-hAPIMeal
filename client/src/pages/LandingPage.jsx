import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Featured from "../components/featured/Featured";

export default function LandingPage() {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/featured`)
      .then((response) => response.json())
      .then((data) => {
        setFeatured(data);
      });
  }, []);

  return (
    <div className="container">
      <p className="title">Une selection de repas selon vos goûts </p>
      <Link to="/search">
        <button type="button" className="mainButton">
          Commencer
        </button>
      </Link>
      <h2> Les recettes du moment </h2>
      <div className="featuredImages">
        {featured &&
          featured.map((f) => <Featured key={f.id} imageURL={f.image} />)}
      </div>
    </div>
  );
}
