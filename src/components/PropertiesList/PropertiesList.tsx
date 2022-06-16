import React from "react";
import PropertyListTable from "src/components/PropertiesList/PropertyListTable/PropertyListTable";
import { FetchData } from "src/api/fetchData";
import { useQuery } from "react-query";
import { Data } from "src/types/Data";
import { Validation } from "src/types/Validation";
export type PropertiesListProps = {};

const PropertiesList: React.FC<
  PropertiesListProps
> = (): React.ReactElement => {
  const { data, status }: Data = useQuery("todos", FetchData);

  if (status === Validation.LOADING) {
    return <div>Loading...</div>;
  }

  if (status === Validation.ERROR) {
    return <div>Sorry, something went wrong! Please try again later.</div>;
  }

  return (
    <div>
      <PropertyListTable data={data} />
    </div>
  );
};

export default PropertiesList;
