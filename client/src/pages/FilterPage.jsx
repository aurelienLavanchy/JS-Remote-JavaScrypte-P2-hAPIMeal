import Filter from "../components/filter/Filter";
import style from "../components/filter/filter.module.css";

export default function FilterPage() {
  return (
    <>
      <h1 className={style.title}> Personnalisez votre menu de la semaine </h1>
      <h2 className={style.subtitle}>
        Nous sélectionnerons pour vous les plats qui vous correspondent le plus
      </h2>

      <div>
        <Filter />
      </div>
    </>
  );
}
