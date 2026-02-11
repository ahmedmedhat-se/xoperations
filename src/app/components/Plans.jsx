import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import plansData from "../json/Plans.json";
import "../styles/plans.css";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="plans-container">
      {plansData.map((plan, index) => (
        <div key={index} className="plan-card">
          <h3 className="plan-title">{plan.title}</h3>
          <p className="plan-description">{plan.description}</p>
          <p className="badge bg-primary">{plan.targetSegment}</p>
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
            <Link className="choose-btn" to={"/xoperations/about"}>Choose PLan</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;