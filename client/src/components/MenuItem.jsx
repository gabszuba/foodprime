import PropTypes from "prop-types";

export default function MenuItem({ item }) {
  return (
    <div>
      <h3 className="text-xl font-bold font-gabarito">
        {item.name}
      </h3>
      <p>
        {item.description}
      </p>
      <span className="font-semibold">
        R$
        {item.price}
      </span>
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};
