import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const USMap = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geographyUrl="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/usa.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleCityClick(geo.properties.name)}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {selectedCity && (
        <div>
          <h2>{selectedCity}</h2>
          <p>City info here</p>
        </div>
      )}
    </div>
  );
};

export default USMap;
