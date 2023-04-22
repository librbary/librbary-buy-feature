import React from "react";

const Reviews = () => {
  return (
    <>
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            <span className="text-primary-500">Reviews</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Reviews;
