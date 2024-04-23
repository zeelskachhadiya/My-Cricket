import {} from "./WhyChoose.css";

const WhyChoose = () => {
  const points = [
    "Expert Instruction",
    "Tailored Learning Paths",
    "Flexibility and Convenience",
    "Community Engagement",
    "Comprehensive Fitness Guidance",
    "Progress Tracking",
    "Exclusive Offers and Guarantees",
  ];
  return (
    <div className="row justify-content-center">
      <div className="details">
        {points.map((data) => {
          return (
            <ul>
              <li>{data}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChoose;
