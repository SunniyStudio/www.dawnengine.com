+++
title = "Cesium Geospatial"
description = "Integrated Cesium real Earth with global terrain and imagery, photogrammetry, and 3D Tiles for centimeter-to-planet geographic worlds."
translationKey = "feature-cesium-geospatial"
weight = 90

[params]
slug = "cesium-geospatial"
icon = "globe"
accent = "#FF7A00"
tagline = "Real Earth, from centimeters to planet"
heroImage = "/media/features/cesium-geospatial.jpg"
related = ["double-precision-rendering", "world-partition", "pixel-streaming"]
[[params.specs]]
k = "Earth model"
v = "WGS84 real-Earth ellipsoid"
[[params.specs]]
k = "Data formats"
v = "3D Tiles / photogrammetry / terrain & imagery"
[[params.specs]]
k = "Coordinates"
v = "Geographic coordinates aligned with double precision"
[[params.specs]]
k = "Scale"
v = "PB-scale geospatial data, streamed"
+++

## Overview

Digital-twin and GIS applications require scenes aligned precisely to **real-world geographic coordinates**. DawnEngine integrates **Cesium** geospatial capabilities, supporting global terrain, satellite imagery, photogrammetry models, and massive **3D Tiles** data — so you can build geographic worlds on the real Earth from centimeter precision to planetary scale.

## Key Capabilities

- **Real Earth**: a global geographic framework based on the WGS84 ellipsoid.
- **3D Tiles**: stream massive photogrammetry, point clouds, and BIM models.
- **Terrain and imagery**: global terrain elevation with satellite/aerial imagery overlays.
- **Coordinate alignment**: with [double-precision rendering](double-precision-rendering/), latitude/longitude/elevation are accurate and jitter-free.
- **Massive data**: PB-scale geospatial data scheduled by view distance.

## Use Cases

- City- / watershed- / nationwide digital twins.
- GIS-fused visualization for smart cities, emergency response, transport, and energy.
- Large-scale hosting and browsing of reality meshes and photogrammetry.

## Related Features

Cesium provides the "real geographic foundation"; with [enhanced double-precision rendering](double-precision-rendering/) for precision, [World Partition](world-partition/) for scale, and [pixel streaming](pixel-streaming/) for web delivery, it forms a complete geographic-twin solution.
