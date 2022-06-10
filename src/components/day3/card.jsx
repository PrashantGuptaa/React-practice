import "./day3Styles.css";

const Card = (props) => {
  const { name, description, season } = props;
  return (
    <div className="card">
      <h3>Name: {name} </h3>
      <h3>Description: {description} </h3>
      <h3>Season: {season} </h3>
    </div>
  );
};

export default Card;
