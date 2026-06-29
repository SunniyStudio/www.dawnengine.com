+++
title = "Enhanced Double-Precision Rendering"
description = "64-bit double-precision world coordinates keep city- and planet-scale worlds stable and jitter-free far from the origin."
translationKey = "feature-double-precision-rendering"
weight = 20

[params]
slug = "double-precision-rendering"
icon = "ruler"
accent = "#FFB347"
tagline = "Planet-scale coordinates, no distant jitter"
heroImage = "/media/features/double-precision-rendering.jpg"
related = ["world-partition", "cesium-geospatial", "built-on-o3de"]
[[params.specs]]
k = "Coordinate precision"
v = "64-bit double-precision world coordinates"
[[params.specs]]
k = "Origin strategy"
v = "Camera-relative / partition-local coordinates"
[[params.specs]]
k = "Scale"
v = "City scale → planetary scale"
[[params.specs]]
k = "Compatibility"
v = "Works with World Partition and Cesium"
+++

## Overview

Traditional engines often represent world coordinates with 32-bit single-precision floats. As objects move far from the world origin (kilometers away), precision degrades sharply, causing **visual jitter, Z-fighting, and unstable physics** — fatal for city-scale digital twins and planet-scale simulation.

DawnEngine enhances the pipeline with **double-precision (64-bit) world coordinates**, combined with **camera-relative rendering** and **partition-local coordinate** strategies, so objects stay stable and accurate no matter how far they are from the origin.

## Key Capabilities

- **64-bit world coordinates**: maintain precision from meters to tens of thousands of kilometers.
- **Camera-relative rendering**: rebuild local coordinates around the camera to bypass GPU single-precision limits.
- **Stable distant views**: eliminate jitter and Z-fighting far from the origin.
- **Consistent physics**: high-precision coordinates drive physics and collision in sync, avoiding numerical drift in large worlds.

## Use Cases

- City / campus-scale digital twins and visualization.
- Aerospace, Earth, and planetary-scale simulation.
- GIS / BIM fusion aligned to real-world geographic coordinates.

## Related Features

Double precision is the cornerstone of large worlds and is typically used with [World Partition](world-partition/) streaming and [Cesium Geospatial](cesium-geospatial/) real-Earth coordinates to deliver seamless, accurate large-scale worlds.
