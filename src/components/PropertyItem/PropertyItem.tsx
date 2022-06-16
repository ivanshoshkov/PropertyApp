import React, { useEffect } from "react";
import { useParams, Params } from "react-router-dom";
import { Property } from "src/types/PropertyItem";
import PropertyDetails from "src/components/PropertyItem/PropertyDetails/";
import NearbyProperties from "src/components/PropertyItem/NearbyProperties";
import styles from "./PropertyItem.module.css";
import Image from "src/components/common/Image";
import NotFound from "src/components/NotFound";
import { FetchData } from "src/api/fetchData";
import { useQuery } from "react-query";
import { Data } from "src/types/Data";
import { Validation } from "src/types/Validation";

type PropertyItemProps = {};

const PropertyItem: React.FC<PropertyItemProps> = (): React.ReactElement => {
  const [property, setProperty] = React.useState<Property | undefined>();
  const [propertiesNearby, setPropertiesNearby] = React.useState<Property[]>();
  const { id }: Params<string> = useParams();
  const { data, status }: Data = useQuery("todos", FetchData);

  useEffect(() => {
    if (data) {
      const propertyData: Property | undefined = data.find(
        (item) => item.id === id
      );
      if (propertyData) {
        const propertiesNearby: Property[] = data
          .filter((item) => item.address.city === propertyData.address.city)
          .filter((item) => item.id !== id);
        setProperty(propertyData);
        setPropertiesNearby(propertiesNearby);
        document.title = `${propertyData.name} - Property App`;
      }
    }
  }, [data, id]);

  if (status === Validation.LOADING) {
    return <div>Loading...</div>;
  }

  if (status === Validation.ERROR) {
    return <div>Error!</div>;
  }

  return property ? (
    <div>
      <div className={styles.hero_image_container}>
        <Image
          src={property.image}
          className={styles.hero_image}
          alt={property.name}
        />
      </div>
      <div className={styles.property_details_container}>
        <PropertyDetails property={property} />
        <NearbyProperties propertiesNearby={propertiesNearby} />
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default PropertyItem;
