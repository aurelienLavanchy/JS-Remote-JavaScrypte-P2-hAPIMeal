import PropTypes from "prop-types";
import style from "./featured.module.css";

function Featured({ imageURL }) {
  return (
    <div className={style.featured}>
      <img className={style.imgFeatured} src={imageURL} alt="meal" />
    </div>
  );
}

Featured.propTypes = {
  imageURL: PropTypes.string.isRequired,
};

export default Featured;
