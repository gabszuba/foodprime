import PropTypes from "prop-types";

export default function InformationBox({ imageSrc, title, description }) {
  return (
    <div>
      <img className="w-52 mx-auto my-4" src={imageSrc} alt="" />
      <h3 className="text-xl font-semibold font-gabarito">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

InformationBox.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
