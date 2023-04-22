import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill className="text-lg text-secondary-500" />
        ) : stars >= number ? (
          <BsStarHalf className="text-lg text-secondary-500" />
        ) : (
          <BsStar className="text-lg text-secondary-500 " />
        )}
      </span>
    );
  });

  return (
    <>
      <div className="flex gap-1 items-center justify-start mb-4">
        {ratingStar}
        <p className="m-1 pl-2 text-slate-700">({reviews} Reviews)</p>
      </div>
    </>
  );
};

export default Stars;
