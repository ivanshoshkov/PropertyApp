import { Property } from "src/types/PropertyItem";
import { BASE_URI } from "../constants";

export const FetchData = async (): Promise<Property[] | undefined> => {
  const response = await fetch(BASE_URI as string);
  const data = await response.json();
  return data;
};
