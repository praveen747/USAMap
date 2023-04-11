import React, { useState } from "react";
import USAMap from "react-usa-map";

const UsaMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleClick = (event) => {
    setSelectedState(event.target.dataset.name);
  };

  return (
    <div>
      <USAMap onClick={handleClick} />
      {selectedState && <div>You clicked on {selectedState}</div>}
    </div>
  );
};

export default UsaMap;
