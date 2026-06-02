import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container nav-content">
        <h2 className="logo">ShopSite</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
