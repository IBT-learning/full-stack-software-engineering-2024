import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <div>
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/create">Create Recipe</Link>
      </nav>
    </header>
    <main>
      <Outlet /> {/* Render child routes here */}
    </main>
    <footer>
      <p>Recipe App © 2025</p>
    </footer>
  </div>
);

export default Layout;
