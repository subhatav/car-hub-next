"use client";

import { ShowMoreProps } from "@/types";

import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleNavigation = () => {
    // Calculate the new limit based on the Page Number
    const freshLimit = (pageNumber + 1) * 10;

    setLimit(freshLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
