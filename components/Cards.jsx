import Card from "./Card";

const Cards = ({ foods }) => {
  return (
    <div>
      {foods.length > 0 && (
        <ul className="grid md:grid-cols-1 lg:grid-cols-2 w-100">
          {foods.map((food) => (
            <Card key={food._id} food={food} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cards;
