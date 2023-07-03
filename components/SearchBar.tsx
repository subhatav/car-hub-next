"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({ otherCls }: { otherCls: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherCls}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt="Magnifying Glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ setManufacturer, setModel }) => {
  const [searchMaker, setSearchMaker] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchMaker.trim() === "" && searchModel.trim() === "") {
      return alert("Please provide some input!");
    }

    setManufacturer(searchMaker);
    setModel(searchModel);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchMaker}
          setSelected={setSearchMaker}
        />
        <SearchButton otherCls="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Car Model Icon"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(event) => setSearchModel(event.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherCls="sm:hidden" />
      </div>

      <SearchButton otherCls="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
