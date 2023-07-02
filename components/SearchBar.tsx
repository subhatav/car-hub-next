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

const SearchBar = () => {
  const [model, setModel] = useState("");
  const [manufacturer, setManuFacturer] = useState("");

  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input!");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    // Get the fresh URL Search Parameters using the current values
    const searchParams = new URLSearchParams(window.location.search);

    // Set or delete the `model` field based on the its value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Set or delete the `manufacturer` field based on its value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    // Construct the updated URL Pathname
    const freshPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(freshPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManuFacturer}
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
          value={model}
          onChange={(event) => setModel(event.target.value)}
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
