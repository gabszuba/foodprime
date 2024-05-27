import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import useFetch from "../hooks/useFetch";

export default function Restaurants() {
  const { data: objRest, isLoading, error } = useFetch("/restaurantes");
  const [selectedCategory, setCategoriaSelecionada] = useState("");

  if (isLoading) {
    return (
      <div className="relative h-full w-full">
        <div className="circle-spin-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> </div>
        ;
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Erro:
        {error.message}
      </div>
    );
  }

  if (!objRest) {
    return <div>Não foram encontrados restaurantes</div>;
  }

  // Definindo os tipos de restaurantes para filtro
  const categorias = [
    "Hamburgueria",
    "Lanchonete",
    "Pizzaria",
    "Restaurante Japonês",
    "Loja de açaí",
    "Bar",
    "Restaurante",
    "Fast food",
    "Confeitaria",
    "Sorveteria",
    "Cafeteria",
    "Pastelaria",
    "Padaria",
    "Mercado",
    "Quiosque",
    "Outros",
  ];

  // Aplica o filtro usando o filter
  const filterByCategory = (category) => objRest.restaurants.filter((restaurant) => restaurant.category.toLowerCase().includes(category.toLowerCase()));

  // Modifica a categoria
  const handleCategoriaChange = (event) => {
    setCategoriaSelecionada(event.target.value);
  };

  return (
    <section>
      <h1 className="text-5xl font-bold font-gabarito">Restaurantes</h1>
      <label htmlFor="selectedCategory">Filtre por categoria: </label>
      <select
        id="selectedCategory"
        value={selectedCategory}
        onChange={handleCategoriaChange}
        className="border bg-bg-secondary rounded-md text-sm p-2 m-2"
      >
        <option value="">Todas as categorias</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-4 gap-4 pt-4 pb-10">
        {selectedCategory
          ? filterByCategory(selectedCategory).map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))
          : objRest.restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))}
      </div>
    </section>
  );
}
