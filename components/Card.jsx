import Image from "next/image";

const Card = ({ food }) => {
  return (
    <div className="flex-col w-96 m-16 rounded-lg bg-zinc-900 hover:bg-orange-400 shadow-md hover:shadow-orange-200">
      <div className="flex">
        <div className="bg-orange-200 rounded-tl-lg w-16 h-24"></div>
        <li className="p-8 font-semibold text-2xl">{food?.name}</li>
      </div>
      <div className="flex">
        <Image
          className="rounded-bl-lg z-10"
          src={food.imageUrl}
          height="250px"
          width="300px"
          alt="image-food"
        />
        <div className="bg-orange-200 w-24 h-64 rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default Card;
