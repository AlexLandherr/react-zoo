import { Link, Outlet } from "react-router-dom";
import "./../styles/Layout.css";
import { hasMoreThanFourHoursPassed } from "./moreThanFourHours";

export const Layout = () => {
    return (
    <div className="layout">
      <header>
          React Zoo
      </header>
      <section>
        <aside>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/animals">Animals Menu</Link></li>
          </ul>
        </aside>
        <main>
          <Outlet/>
        </main>
      </section>
      <footer>{hasMoreThanFourHoursPassed()}</footer>
    </div>
    );
};