"use client";

import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// You can use a TopoJSON from react-simple-maps or your own
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMap1() {
  return (
    <section
    className="relative w-full md:flex-row items-center justify-between gap-10 bg-white"> 
    <div className="max-w-6xl mx-auto py-10 px-4 ">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Our Global Presence
      </h2>

      <ComposableMap projectionConfig={{ scale: 140 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#E0E0E0",
                    outline: "none"
                  },
                  hover: {
                    fill: "#FF5722",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#E91E63",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>

        {/* Marker for Noida */}
        <Marker coordinates={[77.3260, 28.5355]}>
          <circle r={6} fill="#C71D52" />
          <text textAnchor="middle" y={-10} style={{ fontSize: 12, fill: "#333" }}>
            Noida Office
          </text>
        </Marker>

        {/* Marker for Golden-I (Assuming nearby Greater Noida West) */}
        <Marker coordinates={[77.4521, 28.6128]}>
          <circle r={6} fill="#3F51B5" />
          {/* <text textAnchor="middle" y={-10} style={{ fontSize: 12, fill: "#333" }}>
            Golden-I Office
          </text> */}
        </Marker>
      </ComposableMap>
    </div>
    </section>
  );
}
