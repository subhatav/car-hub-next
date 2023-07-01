"use client";

import { useRouter } from "next/navigation";

import { updateSearchParams } from "@/utils";
import { ShowMoreProps } from "@/types";

import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the Page Number
    const freshLimit = (pageNumber + 1) * 10;

    // Update the "limit" Search Parameter in the URL with the new value
    const freshPathname = updateSearchParams("limit", `${freshLimit}`);

    router.push(freshPathname);
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
