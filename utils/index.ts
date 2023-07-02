import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in USD
  const mileageFactor = 0.1; // Additional rate per miles driven
  const ageFactor = 0.05; // Additional rate per year of vehicle Age

  // Calculate additional rate based on the mileage and vehicle age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate the total rental rate per day in USD
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL Search Parameters
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified Search Parameter to the given value
  searchParams.set(type, value);

  // Construct the updated URL Pathname
  const freshPathname = `${
    window.location.pathname
  }?${searchParams.toString()}`;

  return freshPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the fresh URL Search Parameters to the given values
  const freshSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified Search Parameter
  freshSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL Pathname
  const freshPathname = `${
    window.location.pathname
  }?${freshSearchParams.toString()}`;

  return freshPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required Headers for the API Request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the Response fetched as JSON
  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const { make, model, year } = car;

  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );

  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  // url.searchParams.append('zoomLevel', zoomLevel);

  return `${url}`;
};
