import { useNavigate } from "react-router-dom";
import FeatureCard from "../../components/FeatureCard";
import "./OrderOnline.css";

export default function OrderOnline() {
  const navigate = useNavigate();

  const handleStartOrdering = () => {
    navigate("/meals");
  };

  return (
    <div className="order-online-container">
      <section className="order-hero-section">
        <div className="order-hero-content">
          <h1 className="order-hero-title">Order Meals Online</h1>
          <p className="order-hero-subtitle">
            Convenient, fast, and delicious meals delivered to your doorstep
          </p>
          <p className="order-hero-description">
            Skip the wait and enjoy your favorite dishes from the comfort of
            your home. Our online ordering system makes it easy to browse our
            menu, customize your order, and track your delivery in real-time.
            Fresh ingredients, expert preparation, and speedy delivery - all at
            your fingertips.
          </p>
          <div className="order-hero-actions">
            <button
              onClick={handleStartOrdering}
              className="cta-button primary large"
            >
              Start Ordering
            </button>
            <a href="#how-it-works" className="cta-button secondary">
              How It Works
            </a>
          </div>
        </div>
        <div className="order-hero-visual">
          <div className="order-steps-preview">
            <div className="step-preview">
              <span className="step-number">1</span>
              <span className="step-text">Browse Menu</span>
            </div>
            <div className="step-preview">
              <span className="step-number">2</span>
              <span className="step-text">Customize Order</span>
            </div>
            <div className="step-preview">
              <span className="step-number">3</span>
              <span className="step-text">Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works-section">
        <div className="section-header">
          <h2>How Online Ordering Works</h2>
          <p>Simple steps to get your favorite meals delivered</p>
        </div>

        <div className="steps-grid">
          <FeatureCard
            icon="📱"
            title="Browse & Select"
            description="Explore our extensive menu with detailed descriptions, high-quality images, and customer reviews to make the perfect choice."
          />
          <FeatureCard
            icon="🛒"
            title="Add to Cart"
            description="Easily add items to your cart, customize your order with special instructions, and apply any available discounts."
          />
          <FeatureCard
            icon="💳"
            title="Secure Checkout"
            description="Complete your order with our secure payment system. Multiple payment options including credit cards and digital wallets."
          />
          <FeatureCard
            icon="🚚"
            title="Track Delivery"
            description="Receive real-time updates on your order status and track your delivery driver's location until it arrives at your door."
          />
        </div>
      </section>

      <section className="benefits-section">
        <div className="section-header">
          <h2>Why Order Online With Us?</h2>
          <p>Experience the convenience of modern food delivery</p>
        </div>

        <div className="benefits-grid">
          <FeatureCard
            icon="⏰"
            title="Save Time"
            description="No waiting in lines or calling to place orders. Browse and order at your own pace, anytime, anywhere."
          />
          <FeatureCard
            icon="🎯"
            title="Order Accuracy"
            description="Visual menu selection and written special instructions ensure your order is exactly what you want, every time."
          />
          <FeatureCard
            icon="💰"
            title="Exclusive Deals"
            description="Access online-only promotions, loyalty rewards, and special discounts available only through our ordering platform."
          />
          <FeatureCard
            icon="🔄"
            title="Easy Reordering"
            description="Save your favorite orders and reorder with just a few clicks. Perfect for your regular meals and family favorites."
          />
        </div>
      </section>

      <section className="order-cta-section">
        <div className="order-cta-content">
          <h2>Ready to Order Online?</h2>
          <p>
            Join thousands of satisfied customers who love the convenience of
            online ordering. Your next delicious meal is just a few clicks away!
          </p>
          <div className="order-cta-actions">
            <button
              onClick={handleStartOrdering}
              className="cta-button primary large"
            >
              Order Now
            </button>
            <div className="delivery-info">
              <span className="delivery-badge">
                🚚 Free delivery on orders over $25
              </span>
              <span className="delivery-time">
                ⏱️ Average delivery time: 25-35 minutes
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
