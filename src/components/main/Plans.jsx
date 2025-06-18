import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import plansData from "../data/Plans.json";
import "../styles/plans.css";

const Plans = () => {
  const userId = localStorage.getItem('userId');
  const userCartKey = `cart_${userId}`;
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem(userCartKey)) || []);

  const addToCart = (plan) => {
    const updatedCart = [...cartItems, plan];
    setCartItems(updatedCart);
    localStorage.setItem(userCartKey, JSON.stringify(updatedCart));
  };

  return (
    <div className="plans-container">
      {plansData.map((plan, index) => (
        <div key={index} className="plan-card">
          <h3 className="plan-title">{plan.title}</h3>
          <p className="plan-description">{plan.description}</p>
          <ul className="plan-features">
            {plan.features.map((feature, i) => (
              <li key={i}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="plan-footer">
            <span className="plan-price">{plan.price}</span>
            <button onClick={() => addToCart(plan)} className="choose-btn">Choose Plan</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;