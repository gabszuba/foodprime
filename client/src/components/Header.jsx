import { NavLink } from "react-router-dom";

export default function Header() {
  const navLinks = [
    { id: "home", path: "/", text: "Home" },
    { id: "restaurantes", path: "/restaurantes", text: "Restaurantes" },
  ];

  return (
    <header className="font-medium text-xl flex justify-between py-8 items-center">
      <div className="font-montserrat">
        FOOD
        <br />
        <span className="font-bold">PRIME</span>
      </div>
      <nav>
        <ul className="flex space-x-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="hover:bg-accent duration-300 px-5 py-2 rounded-2xl">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
