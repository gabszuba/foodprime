import { Link } from "react-router-dom";
import pizza from "/pizza2.png";
import ease from "/ease.svg";
import forAll from "/forAll.svg";
import variety from "/variety.svg";
import InformationBox from "../components/InformationBox";

export default function Home() {
  return (
    <>
      <section>
        <div className="flex items-center py-20 gap-x-14 ">
          <div>
            <h1 className="text-5xl font-bold font-gabarito place-self-end">
              Seu cardápio virtual acessível de qualquer lugar e a qualquer hora
            </h1>
            <p className="text-lg py-6">
              Encontre o restaurante perfeito e explore os melhores pratos, tudo em
              um só lugar. Delicie-se com os sabores mais exóticos ou mergulhe nas
              delícias tradicionais, é sua escolha!
            </p>
            <Link className="font-semibold bg-accent rounded-3xl px-5 py-2" to="/restaurantes">Confira nossos restaurantes</Link>
          </div>
          <img className="row-span-3 w-96" src={pizza} alt="Pizza" loading="lazy" />
        </div>
      </section>
      <section className="grid grid-cols-3 pb-20 text-center gap-4">
        <InformationBox
          imageSrc={forAll}
          title="Opções para Todos"
          description="Desde pratos vegetarianos até opções para quem ama carne, temos algo para todos os gostos."
        />
        <InformationBox
          imageSrc={variety}
          title="Variedade de Pratos"
          description="Encontre o restaurante perfeito e explore pratos de diversos tipos e sabores, tudo em um só lugar."
        />
        <InformationBox
          imageSrc={ease}
          title="Facilidade"
          description="Explore nosso cardápio virtual e descubra restaurantes novos e pratos deliciosos com apenas alguns cliques "
        />
      </section>
    </>

  );
}
