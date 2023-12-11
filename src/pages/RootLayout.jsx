import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          STOCK PULSE
        </Link>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/items">Itens</Link>
        </nav>
      </header>
      <>
        <Outlet />
      </>
      <footer>Criado com React Router Dom</footer>
    </>
  );
}
