import { useNavigate } from "react-router-dom";
import pizzaImage from "../../assets/pizza.jpg";
import "./Home.css";
import FeatureCard from "../../components/FeatureCard";

export default function Home() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/meals");
  };

  const handleExploreMenu = () => {
    navigate("/meals");
  };
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Pizza & More</h1>
          <p className="hero-subtitle">
            Discover delicious cuisine crafted with passion and served with love
          </p>
          <p className="hero-description">
            From authentic Italian pizzas to international favorites, we bring
            you a culinary journey that satisfies every craving. Fresh
            ingredients, traditional recipes, and modern flavors come together
            to create an unforgettable dining experience.
          </p>
          <div className="hero-actions">
            <button onClick={handleOrderNow} className="cta-button primary">
              Order Now
            </button>
            <a href="#features" className="cta-button secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={pizzaImage} alt="Delicious pizza" />
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="section-header">
          <h2>Why Choose Pizza & More?</h2>
          <p>We're committed to bringing you the best dining experience</p>
        </div>

        <div className="features-grid">
          <FeatureCard
            icon="🍕"
            title="Fresh Ingredients"
            description="We use only the freshest, locally-sourced ingredients to ensure every bite is packed with flavor and nutrition."
          />
          <FeatureCard
            icon="⚡"
            title="Fast Delivery"
            description="Quick and reliable delivery service to bring your favorite meals right to your doorstep, hot and fresh."
          />
          <FeatureCard
            icon="👨‍🍳"
            title="Expert Chefs"
            description="Our experienced chefs craft each dish with passion, combining traditional techniques with modern innovation."
          />
          <FeatureCard
            icon="🌟"
            title="Quality Guarantee"
            description="We stand behind every meal we serve. If you're not completely satisfied, we'll make it right."
          />
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Order?</h2>
          <p>
            Browse our extensive menu and discover your new favorite dish today!
          </p>
          <button
            onClick={handleExploreMenu}
            className="cta-button primary large"
          >
            Explore Our Menu
          </button>
        </div>
      </section>
    </div>
  );
}
