import React from "react";
import { NearbyProperty, Property } from "src/types/PropertyItem";
import Container from "src/components/common/Container";
import { useNavigate } from "react-router-dom";
import styles from "./NearbyProperties.module.css";

type NearbyPropertiesProps = {
  propertiesNearby: Property[] | undefined;
};

const NearbyProperties: React.FC<NearbyPropertiesProps> = ({
  propertiesNearby,
}) => {
  const navigate = useNavigate();
  const onRowClick = (id: string) => {
    navigate(`/property/${id}`);
  };

  return (
    <Container style={{ backgroundColor: "white" }}>
      <h2>Nearby Places</h2>
      <div>
        {propertiesNearby &&
          propertiesNearby.map((property: NearbyProperty) => {
            return (
              <div
                onClick={() => onRowClick(property.id)}
                key={property.id}
                className={styles.nearby_property}
              >
                <div style={{ marginRight: 20 }} key={property.id}>
                  {property.name}
                </div>
                <div style={{ wordBreak: "break-word" }}>
                  {property.address.number},{property.address.street},
                  {property.address.city},{property.address.zip}
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default NearbyProperties;
