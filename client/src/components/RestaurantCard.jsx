/* eslint-disable no-underscore-dangle */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurantes/${restaurant._id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="bg-bg-secondary h-full p-6 rounded-xl hover:scale-105 hover:shadow-lg">
        <h2 className="text-2xl font-gabarito">{restaurant.name}</h2>
        <p>{restaurant.category}</p>
      </div>
    </Link>
  );
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
