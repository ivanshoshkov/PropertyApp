import React from "react";
import styles from "./PropertyListTable.module.css";
import { useNavigate } from "react-router-dom";
import {
  PropertyListProps,
  PropertiesListProps,
} from "src/types/PropertiesList";

const PropertyListTable: React.FC<PropertiesListProps> = ({
  data,
}): React.ReactElement => {
  const navigate = useNavigate();
  const onRowClick = (id: string) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className={styles.property_list_table}>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr className={styles.table_header}>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(({ id, name, description }: PropertyListProps) => {
              return (
                <tr key={id} onClick={() => onRowClick(id)}>
                  <td>
                    <span>{name}</span>
                  </td>
                  <td>
                    <span>{description}</span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyListTable;
