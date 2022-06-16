import React from "react";
import Container from "src/components/common/Container";
import { Property } from "src/types/PropertyItem";
import styles from "./PropertyDetails.module.css";
type PropertyDetailsProps = { property: Property };

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  const layout = { display: "flex" };

  return (
    <Container style={layout}>
      <div className={styles.property_details_container}>
        <div className={styles.details_block}>
          <h2>Address</h2>
          <div>
            {property.address.number} {property.address.street} <br />
            {property.address.zip}
          </div>
        </div>
        <div className={styles.details_block}>
          <h2>Contact</h2>
          <div className={styles.details_block_contacts}>
            {property.phone}
            <br />
            {property.email}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PropertyDetails;
