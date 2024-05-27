import { useParams } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import useFetch from "../hooks/useFetch";

export default function RestaurantMenu() {
  const { id } = useParams();
  const { data: objRest, isLoading } = useFetch(`/restaurantes/${id}`);

  if (isLoading) {
    return (
      <div className="relative h-full w-full">
        <div className="circle-spin-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> </div>
        ;
      </div>
    );
  }

  if (!objRest) {
    return <div>Restaurante não encontrado</div>;
  }

  return (
    <section>
      <h1 className="text-5xl font-bold font-gabarito pb-4">{objRest.restaurant.name}</h1>
      <h2 className="text-3xl font-bold font-gabarito text-center">Menu</h2>
      <div className="space-y-4 pt-4 pb-10">
        {objRest.restaurant.menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}
