import dropsicle from "/dropsicle.svg";

export default function NoMatch() {
  return (
    <div className="text-5xl font-bold font-gabarito text-center mt-12">
      <h1 className="">404</h1>
      <p>Página não encontrada</p>
      <img src={dropsicle} alt="" className="mx-auto py-8" />
    </div>
  );
}
