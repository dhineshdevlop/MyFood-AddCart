import "./Home.css";
import AddCart from "./Addcard";
import Fooder from "./Footer";




function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">DK-Veg</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Restaurants</li>
          <li>Offers</li>
          <li>Contact</li>
        </ul>

        <button className="login-btn">Login</button>
      </nav>

      <AddCart/>
      <Fooder/>
        

      
    </div>
    
  
  );
}

export default Home;
