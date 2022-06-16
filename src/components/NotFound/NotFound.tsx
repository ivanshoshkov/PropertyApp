import React from "react";
import { useLocation, Location, useNavigate } from "react-router-dom";

type NotFoundProps = {};

const NotFound: React.FC<NotFoundProps> = (): React.ReactElement => {
  let { pathname }: Location = useLocation();
  let navigate = useNavigate();
  document.title = "404 - Property App";
  const onReturnHome = (): void => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <p>"{pathname}" could not be found</p>
      <button onClick={onReturnHome}>Return home</button>
    </React.Fragment>
  );
};

export default NotFound;
