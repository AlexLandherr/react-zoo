import { Outlet } from "react-router-dom";
import "./../styles/Layout.css";

export const Layout = () => {
    return (
    <div className="layout">
      <header>
          React Zoo
      </header>
      <section>
        <aside>aside</aside>
        <main>
          <Outlet/>
        </main>
      </section>
      <footer>footer</footer>
    </div>
    );
};