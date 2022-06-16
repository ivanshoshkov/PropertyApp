import { Property } from "src/types/PropertyItem";

export type PropertiesListProps = {
  data: Property[] | undefined;
  status?: string;
};

export type PropertyListProps = {
  id: string;
  name: string;
  description: string;
};
